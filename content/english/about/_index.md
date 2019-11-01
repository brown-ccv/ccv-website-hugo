---
title: About
items:
- name: mission
  icon: crow
- name: people
  icon: person-booth
- name: opportunities
  icon: user-circle
- name: How to cite CCV
  icon: comments
mission:
  lead: 'The Center for Computation and Visualization provides high-performance computing
    and visualization services to the Brown community. We also collaborate with researchers
    on projects across vast range of disciplines. '
  text: '<p>We envision an environment where computational best practices, innovative
    solutions, and expert knowledge combine to build advanced tools for research and
    to enable new discoveries. Our mission is to provide the scientific and technical
    computing expertise required to advance computational research and support Brown’s
    academic mission. In practice, this frequently means partnering with researchers
    for projects that may span weeks, months, or years. In some cases, these partnerships
    can involve researchers using grant funds as partial support of one of our research
    software engineers or data scientists. We have a team of data scientists and research
    software engineers with a huge variety of scientific backgrounds (e.g., Engineering,
    Physics, Computer Vision, Biology, Psychology, Statistics, Applied Math, Computer
    Science, etc.), so we can closely calibrate a person with a project.</p>'
  diversity: '<p>CCV embraces a community enriched and enhanced by diverse dimensions, including race, ethnicity and national origins, disability status, gender and gender identity, sexuality, class and religion.  We believe diversity brings innovation and progress. We are especially committed to increasing the representation of those populations that have been historically underrepresented in STEM.</p>
      <p>We are committed to attracting, recruiting and retaining a diverse team. We especially encourage individuals from underrepresented groups to join our community.</p>'
people:
  lead: CCV team is awesome!

cite:
  title: 'How to Cite CCV'
  subtitle1: 'Acknowledgment'
  acknowledgment: '<p class="text-dark">If you publish research that benefited from the use of CCV services or resources, we would greatly appreciate an acknowledgment that states:</p><p>This research [Part of this research] was conducted using [computational/visualization] resources and services at the Center for Computation and Visualization, Brown University.</p>'
  subtitle2: 'Facilities Statement'
  facilities: '<p class="text-dark">If you are writing a grant proposal for research that will use CCV facilities, please use the following text as a short description of our facilities:</p>

<p class="text-dark">Brown University Computing and Information Services</p>  
<p>The central IT organization for the University, Computing and Information Services (CIS), is a group of approximately 210 staff members who deliver the technology infrastructure and services in support of the University’s mission. This group provides technology guidance, training and support for students, faculty, staff and alumni with a focus on customer service.</p>

<p>Support for research is provided by several CIS teams. The Center for Computation and Visualization provides an array of services dedicated to research support, including; high performance computing, storage services, co-location and VM hosting, and various levels of consultation support.  CIS’s Scientific Computing and Data Science team (20+ team members) focuses on improving Brown’s use of data across all facets of the University including partnering with researchers on complex data projects.  The Data Science team also provides data analysis and consulting in support of staff and senior administrators. The Application specialists and visualization experts provide the scientific and technical computing expertise required to advance computational research and support Brown’s academic mission.  Members of these teams are often embedded in research projects and work directly to support advanced research computational methods. </p>

<p class="text-dark">CIS Data Center and Network</p>
<p> Research hardware resides in a central data center located in a facility that is protected by a card access system maintained by the Brown Department of Public Safety, under security camera monitoring and equipped with fire suppression systems. Physical access to the data center is granted  to approved  CIS and CCV staff and escorted hardware vendors only. Redundant power feeds, a 600kW generator and redundant uninterruptible power supplies (UPS) guarantee constant power and cooling. </p><p> Brown University’s network infrastructure is comprised of a state of the art fiber optic backbone connecting a majority of buildings on campus. Redundant internet connectivity provides high availability to the Internet, dedicated 10Gb/s Science DMZ to Internet2, and 12 research sites. Brown University utilizes Cisco networking equipment configured for high availability. An equipment renewal process is managed by the CIS organization to regularly refresh and upgrade network
technology. </p>


<p class="text-dark">High Performance Computing</p>
<p> The accelerated transformation of the pace and impact of computational approaches led to Brown University’s recognition of the importance of high performance computing across all of its disciplines. As a result, in 2009 Brown and IBM developed a $4M investment in a high performance computing platform, known as OSCAR, that is available to researchers statewide. Through grant funding and University investment, this platform has undergone continual hardware enhancement, and now includes Intel Scalable Processors and nVIDIA GPUs of the Pascal, Volta, and Turing architectures, as well as 100Gb/s EDR Infiniband. This state of the art infrastructure is maintained and operated by the CCV staff  who have extensive experience in operating high-performance computing platforms. CCV staff are responsible for scheduled maintenance, access control as needed, and integration with research-specific hardware as required by researchers. CCV staff also take care of all financial aspects of operating and maintaining the facility.  A large collection of software is available on CCV systems, including :python, perl, R, Matlab, Mathematica, Maple, optimized math and science libraries, and domain-specific applications. CCV staff can help acquire and install most applications upon request. </p>


<p>The technical specifications of Oscar are: </p>
<ul>
<li>Over 13,000 cores </li>
<li>Two login nodes for managing files, compiling software, editing scripts, and managing batch jobs</li>
<li>Specialized nodes containing GPU processors (90+ GPUs in total)</li>
<li>InfiniBand high-bandwidth/low-latency interconnect for message-passing and file I/O</li>
<li>IBM GPFS parallel file system</li>
<li>1.7 PB of usable disk space</li>
<li>RHEL 7.3  Linux operating system</li>
<li>SLURM workload manager </li>
</ul>

<p class="text-dark">Data Storage, Backup and Archiving:</p>
<p> Rdata is CCVs high performance file system which is incrementally backed up to tape on a daily basis. A default allocation of 1 TB is given to all faculty members at Brown, on a per request basis, with the option of purchasing additional storage as needed. Additionally, all active grants are given 10TB of storage. Each OSCAR user is given 512GB of high performance scratch space, with a two week grace period where usage can burst up to 12TB, and a 20GB home directory. Snapshots for the last 7 days of RData, scratch and home are available online for quick restores. CCV’s filesystem can be mounted on any machine on Brown’s campus network so researchers can access their data without needing to transfer files to and from OSCAR.  Network attached storage (NAS) of over 5.4PB is also available to researchers. CCV also provides a Globus endpoint for easily transferring files to other institutions. In addition, a disaster recovery copy of the non-ephemeral data is kept on a lower-performance filesystem to permit immediate recovery and limited production computing in the unlikely event of the loss of the primary filesystem. Archiving capability to Azure is available as needed. </p>

<p class="text-dark">StrongHold</p>
<p> The Stronghold server system has been established by Brown University to be compatible with Federal and Rhode Island Law standards for data privacy and protection. The hardware resides in the central datacenter located in a dedicated, private facility which is protected by a card access system maintained by the Brown Department of Public Safety, under security camera monitoring and equipped with fire suppression systems. Within the data center, an additional layer of protection is provided via a locked enclosure for the Stronghold hardware with additional combination and key access. Physical access to the data center is granted to approved Brown Computing and Information Services (CIS) staff and escorted hardware vendors only. Redundant power feeds, a 600kW generator and redundant uninterruptible power supplies (UPS) guarantee constant power and cooling. Brown has established and will maintain a security infrastructure covering its Stronghold system and other devices, including wired and wireless networks connecting its computers. The security system includes, at a minimum, secure user authentication protocols including two-factor authentication and access measures as well as multiple layers of firewall protection, multiple methods to prevent and detect unauthorized access, operating system security patches at least monthly and remote access via virtual private network (VPN) protocol. In addition, Brown will provide an environment that segregates user data and access by security priority via secure virtual protocols and isolates the environment and user sessions from having any ability to download or copy data outside of the computing environment. In the event of a failed disk, the Information Security Group (ISG) provides a service to crush and dispose of the storage device which meets NSA evaluation standards. Access to the systems and data will be limited to authorized users and system administrators, who need root level access to maintain the system. User access is restricted to the Principal Investigator (PI), PI approved research analyst staff, and co-investigators. Monthly reports of security group memberships and last login access are provided to the Principal Investigator. All administrative access is logged to individual accounts that are not shared. Policies and procedures are in place to remove access to users when they leave Brown or are no longer affiliated with projects. Administrative passwords are changed on a regular basis and whenever an administrative user leaves the University. All file movement inbound and outbound of Stronghold is monitored and logged, while Stronghold’s automated monitoring software also sends real-time email alerts to the Principal Investigator. </p>

  <p class="text-dark">Please contact us if you need a more detailed description.</p>'

---
