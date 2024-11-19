export const projects = [
    {
        title: "SecArch",
        desc: "A Rust crate that provides modules for Local network simulation of servers using multi-threaded async tasks,  Shamir’s Secret Sharing Rust Module that includes Galois Field matrix inversion library for polynomial interpolation for Big Integers in cryptography, Proactive shares refreshing algorithm and Pedersen commitments",
        techIcons: ["faRust","faDocker","faPython"],
    },
    {
        title: "JumpProxy",
        desc: "TCP Proxy that provides protection against network threats like Remote Code Execution/Pre-auth attacks by encrypting transmitted traffic using AES-GCM from a PBKDF2 static key, main use case: SSH. Handle multiple incoming connections asynchronously using goroutines on server-side, fragmenting traffic for ideal throughput",
        techIcons: ["faGolang"],
    },
    {
        title: "RAFT Consensus KVDb",
        desc: "Built a key-value storage service on top of a distributed file storage system implementing Raft, a consensus algorithm based on the replicated state machine approach implementing a load balancing key-sharding service that distributes the keys uniformly across servers and handles data transfer using RPCs",
        techIcons: ["faC","faPython"],
    },
    {
        title: "Synprobe",
        desc: "This is a software that performs port scanning similar to nmap and provides additional info about the type of service running on specified ports if open. Able to scan most generic ports or range of custom ports, differentiate between server initiated or client initiated TCP/TLS handshake and HTTP/HTTPS server",
        techIcons: ["faGolang"],
    },
]
