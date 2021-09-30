---
title: Facilities

tagTitle: Facilities Statement - Center for Computation and Visualization
tagDescription: Learn more about CCV's facilities and how to cite CCV.

hero:
  lead: Learn more about CCV's facilities and how to cite CCV.

items:
- name: Facilities Statement
  icon: server
- name: How to Cite CCV
  icon: comments

statement:
  title: 'Facilities Statement'
  text: '<p class="text-dark">If you are writing a grant proposal for research that will use CCV facilities, please use the following text as a short description of our facilities:</p>
        <h4>Computing Resources</h4>
		<p>CCV provides high-performance computing (HPC) resources and scientific computing expertise to Brown University’s research community. Oscar, CCV’s primary research computing cluster, has
            <ul><li>2 login nodes</li>
                <li>360 diskless multi-core nodes</li>
                    <ul><li>11,816 CPU cores</li>
                        <li>available memory ranging from 93 GB to 2096 GB per node</li>
                        <li>sharing a high-performance interconnect and file system and running Red Hat Enterprise Linux 7.3</li>
                    </ul>
                <li>47 GPU nodes</li>
                    <ul><li>total of 355 GPUs</li>
                        <li>available memory ranging from 11 to 48 GB VRAM per GPU</li>
                    </ul>
                <li>xCAT (IBM’s cluster administration toolkit) for provisioning all nodes</li>
                <li>a GPFS parallel filesystem which provides a total of 3 PB of usable storage space</li>
                <li>100 Gb/s EDR Infiniband connectivity</li>
                <li><a href="https://docs.ccv.brown.edu/oscar/system-overview" target="_blank">For more technical details, please see this link.</a></li>
            </ul>
        </p>

        <p>CCV also supports the Carney condo for The Robert J. & Nancy D. Carney Institute for Brain Science. The condo has
           <ul><li>10 Intel Cascade Lake nodes, each with 32 cores and 376GB memory</li>
               <li>100 Nvidia Quadrortx GPUs, each with 24GB memory</li>
               <li>1.4 Petabyte data storage</li>
           </ul>
        </p>
        <p class="text-dark"></p>

		<h4>Stronghold</h4>

		<p>Stronghold is a secure computing and storage environment that enables Brown researchers to analyze sensitive data, while complying with regulatory or contractual requirements. Stronghold is based on FISMA (Federal Information Security Management Act) requirements using 800-53 controls and meets CJIS (Criminal Justice Information Security) requirements. This service is customized to the needs of individual users and their data use agreements. Each Principal Investigator (PI) is given a dedicated environment for their project to support their researchers, students, and collaborators. Access to the internet is restricted except for required locations for data imports or necessary software downloads and via VPN for workstation access. Import and export controls are in place to limit who can perform data migration, where sensitive data can come from and where desensitized or anonymized data can be moved to. Sensitive data are subject to file system auditing, and real-time alerting is available at the request of the PI. </p>
    
    <p>The Stronghold server system resides in the central datacenter located in a dedicated, private facility equipped with fire suppression systems. It is protected by a card access system maintained by the Brown Department of Public Safety. Within the datacenter the hardware is contained in a locked cabinet with a limited access list for maintenance. The Stronghold environment includes security protections for secure user authentication protocols including two-factor authentication, as well as multiple layers of firewall protection, multiple methods to prevent and detect unauthorized access, regular operating system security patch updates and remote access via virtual private network (VPN) protocol. Stronghold supports multiple protocols (SFTP, FTPS, HTTPS) for transferring data into the environment. </p> 
    
    <p>To date, Stronghold has over 60 tenants with over 50 Principal Investigators and over 500 users. Stronghold has undergone internal audits, external audits by a leading security firm and is consistently under review for improvements by Brown’s technical team. </p>

    <h4>dbGaP</h4>
		<p>Use of dbGaP data on the computing cluster is restricted to a Singularity software container mechanism that isolates the application from outside networking. It also restricts storage write access to a special area on the enterprise Isilon platform that is reserved for dbGaP use. A separate transfer gateway system with file access auditing provides a path for dbGaP data transfer into the system, as well as the transfer of computational results out of the system.</p>

		<h4>CCV Staff</h4>
		<p>CCV’s state-of-the-art infrastructure is maintained and operated by CCV staff, who have extensive experience in operating shared computational clusters. CCV staff members are responsible for scheduled maintenance, access control, and integration with research-specific hardware as required by researchers. A large collection of software is available on Oscar, including: R, Matlab, Mathematica, Maple, and a large range of optimized math and science libraries and domain-specific applications. CCV staff members are available to assist with the acquisition and installation of any applications not already available on Oscar. CCV staff members are also available to consult on research projects and work directly to support and develop the advanced computational methods used by researchers at Brown. </p>
    
    <p> Please contact <a href = "mailto: support@ccv.brown.edu">support@ccv.brown.edu</a> if you need a more detailed description.</p>'
cite:
  title: 'Acknowledgment'
  text: '<p class="text-dark">If you publish research that benefited from the use of CCV services or resources, we would greatly appreciate an acknowledgment that states:</p><p>This research [Part of this research] was conducted using [computational/visualization] resources and services at the Center for Computation and Visualization, Brown University.</p>'

---
