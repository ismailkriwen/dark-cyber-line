const VirusPage = () => {
  return (
    <div className="grid mt-8 gap-5">
      <div className="w-full md:h-[600px] h-[200px]">
        <img src="/assets/virus.jpg" alt="" className="w-full h-full" />
      </div>
      <div>
        A computer virus is a type of malicious software, or malware, that is
        designed to infect computer systems and spread from one computer to
        another. Like biological viruses that infect living organisms, computer
        viruses can replicate and spread, often causing harm to the infected
        computer and potentially other connected systems. Computer viruses
        typically work by attaching themselves to legitimate programs or files,
        and when these infected files are executed, the virus code is activated.
        Once active, a computer virus can perform various malicious actions,
        including: Replication: Computer viruses can make copies of themselves
        and spread to other files, folders, or even other computers, typically
        through shared files, email attachments, or removable media like USB
        drives. Damage: Many viruses are designed to corrupt or delete files,
        leading to data loss or system instability. Unauthorized Access: Some
        viruses can exploit security vulnerabilities to gain unauthorized access
        to a computer or network, potentially allowing cybercriminals to steal
        information or control the infected system remotely. Data Theft: Certain
        viruses are designed to steal sensitive information, such as login
        credentials, personal data, or financial information. Botnet Formation:
        Some viruses are used to create a network of infected computers (a
        botnet) under the control of a remote attacker. These botnets can be
        used for various malicious purposes, including launching distributed
        denial-of-service (DDoS) attacks.
      </div>
    </div>
  );
};

export default VirusPage;
