---
title: "Picard tools CollectHsMetrics"
date: 2019-06-03T11:02:52-05:00
draft: false
types: ["posts"]
tags: ["computational biology", "genomics", "exome sequencing"]
authors: ["Joselynn Wallace"]

---

{{% lead %}}
Picard tools are a set of tools for manipulating files (SAM, VCF, etc.) from high-throughput sequencing experiments, including several modules for collecting and reporting various quality [metrics](http://broadinstitute.github.io/picard/picard-metric-definitions.html). This blog post details how I ran Picard tools' [`CollectHsMetrics`](https://broadinstitute.github.io/picard/command-line-overview.html#CollectHsMetrics) on an exome sequencing library.
{{% /lead %}}

You can find more details on Picard tools on [github](https://github.com/broadinstitute/picard). According to the documentation, `CollectHsMetrics` requires the following input: <br />

1. Alignment file (.BAM or .SAM)
2. Reference sequence .fasta file
3. List of target intervals
4. List of bait intervals<br />

While the alignment and reference .fasta file should be easy to find, the bait and target intervals can be a little more challenging. 


**Download baits and intervals files**

In this particular case, the capture kit used was the Agilent SureSelect Human All Exon v5 kit, so I went [here](https://earray.chem.agilent.com/suredesign/index.htm) and signed up for an account. After signing in, I was directed to the following landing page, where I clicked on the 'Find Designs' tab at the top middle of the page and clicked 'SureSelect DNA' from the dropdown menu that appeared.

{{< image src="images/HSMetrics_img_1.png" height="400" align="center" >}}

When I arrived at the next page, I selected the tab for 'Agilent Catalog' and checked the box for H. sapiens (hg19) in the left menu. The results table did not populate until I also checked the box for 'Design Category' (also in the left menu). 


{{< image src="images/HSMetrics_img_2.png" height="400" align="center" >}}

Then I clicked the link for 'SureSelect Human All Exon V5' (highlighted in blue in the above figure) and another popup appeared, which had a pull-down menu to indicate which genome build I wanted to view. Again, I selected hg19 and clicked 'View Design Details' and clicked the download link. 


{{< image src="images/HSMetrics_img_3.png" height="400" align="center" >}}

I downloaded all of the files, since at this point I wasn't sure which file would be the baits and which would be the intervals.

{{< image src="images/HSMetrics_img_4.png" height="400" align="center" >}}

**Which files are baits and intervals?**

To get a better sense of what was in the .bed files, I looked at the first few lines of each file using the `head` command and saw the following information in the first few lines of each file:

The second line returned from `head -10 S04380110_Padded.bed` was:  
```track name="Padded" description="Agilent SureSelect DNA - SureSelectXT Human All Exon V5 - Covered bed file extended by 100bp on either side"```

The second line returned from `head -10 S04380110_Covered.bed` was:  
```track name="Covered" description="Agilent SureSelect DNA - SureSelectXT Human All Exon V5 - Genomic regions covered by probes".```

The second line returned from `head -10 S04380110_Regions.bed` was:   
```track name="Target Regions" description="Agilent SureSelect DNA - SureSelectXT Human All Exon V5"```      

Based on these descriptions, I used `S04380110_Covered.bed` as the baits and `S04380110_Regions.bed` as the targets files.    


**Convert baits and intervals and running CollectHsMetrics**
`CollectHsMetrics` expects the baits and targets files to be in interval list format, so I used Picard tools `BedToIntervalList` tool to convert the .bed files. `BedToIntervalList` requires a sequence dictionary file. If you don't already have access to a sequence dictionary file, it can be created with Picard tools `CreateSequenceDictionary`. I converted the .bed files to intervals with the following bash script:   

```bash
#!/bin/bash
#SBATCH -t 8:00:00
#SBATCH --mem=4GB
#SBATCH -n 8
#SBATCH -J picardtools_BedToIntervalList

source /gpfs/runtime/cbc_conda/bin/activate_cbc_conda

java -Xmx1000M -jar /gpfs/runtime/cbc_conda/cbc_conda_v1_root/envs/cbc_conda_v1/share/picard-2.13.2-1/picard.jar BedToIntervalList \
I=S04380110_Covered.bed \
O=S04380110_Covered.interval_list \
SD=/gpfs/data/cbc/refchef_refs/broad_bundle_hg19/primary/ucsc.hg19.dict
```

After the `BedToIntervalList` script finishes running, you can run `CollectHsMetrics`:

```bash
#!/bin/bash
#SBATCH -t 8:00:00
#SBATCH --mem=10GB
#SBATCH -n 32
#SBATCH -J picardtools_CollectHsMetrics

source /gpfs/runtime/cbc_conda/bin/activate_cbc_conda

java -Xmx1000M -jar /gpfs/runtime/cbc_conda/cbc_conda_v1_root/envs/cbc_conda_v1/share/picard-2.13.2-1/picard.jar CollectHsMetrics \
I=alignment.bam \
O=output_hs_metrics.txt \
R=/gpfs/data/cbc/refchef_refs/broad_bundle_hg19/primary/ucsc.hg19.fasta \
BAIT_INTERVALS=S04380110_Covered.interval_list \
TARGET_INTERVALS=S04380110_Regions.interval_list

```
Now you will have information to access the performance of your exome sequencing experiment. For more details on how to interpret the output from `CollectHsMetrics`, click [here](http://broadinstitute.github.io/picard/picard-metric-definitions.html#HsMetrics).

{{% sign "Joselynn Wallace" %}}
