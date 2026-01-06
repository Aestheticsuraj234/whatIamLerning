Designing for millions of users means starting from a simple single-server system and then incrementally adding components to handle scale, reliability, and performance.[1]

## Start: Single server

- Everything (web app, database, cache, storage) runs on one machine.[1]
- Request flow: DNS resolves domain → browser gets IP → sends HTTP request → server returns HTML/JSON.[1]
- Works for very small traffic but has no redundancy and limited capacity.[1]

## Split into tiers and scale

- First step: separate **web tier** and **database tier** so each can scale independently.[1]
- Database choice:  
  - Relational (MySQL, PostgreSQL, etc.) for structured data and joins.  
  - NoSQL (key‑value, column, document, graph) for unstructured or massive data, low latency, or simple serialization.[1]
- Scaling styles:  
  - Vertical (bigger machine) is simple but has a hard hardware limit and single point of failure.  
  - Horizontal (more machines) is preferred for large systems.[1]

## High availability: load balancer, replication, cache, CDN

- **Load balancer** sits in front of multiple web servers, using private IPs between LB and servers.[1]
  - If one web server fails, traffic goes to others.  
  - Adding more web servers is just adding them to the pool.[1]

- **Database replication** (master–slave):[1]
  - Master handles writes; slaves handle reads.  
  - Improves performance (parallel reads), reliability (data copied), and availability (promote slave if master fails).[1]

- **Cache tier**:[1]
  - Stores frequently read or expensive data in memory to reduce DB load and latency.  
  - Typical pattern: read‑through cache (check cache → DB if miss → write to cache).[1]
  - Key concerns: when to cache, expiration policy, consistency with DB, avoiding single cache server failure, and eviction policy (e.g., LRU).[1]

- **CDN for static content**:[1]
  - Geographically distributed servers cache static assets (images, JS, CSS, videos).[1]
  - Flow: CDN gets file from origin once, caches it with TTL, then serves subsequent users from edge locations.[1]
  - Need to manage cost, cache expiry, fallback to origin, and invalidations/versioning.[1]

## Stateless web tier and multi–data center

- **Stateful**: session data lives on specific web server → requires sticky sessions, harder scaling and failure handling.[1]
- **Stateless**: move session/state to shared store (DB/Redis/NoSQL). Any web server can serve any request, enabling easy auto‑scaling.[1]

- **Multiple data centers**:[1]
  - Users are routed (via geoDNS) to nearest data center for latency and availability.  
  - On data center failure, traffic fails over to another region.  
  - Challenges: traffic routing, cross‑DC data replication, and consistent deploy/testing.[1]

## Decoupling and observability

- **Message queue**:[1]
  - Asynchronous communication between producers (e.g., web servers) and consumers (workers).  
  - Helps decouple components and smooth bursty workloads (e.g., photo processing jobs).[1]

- **Logging, metrics, automation**:[1]
  - Centralized logs to detect errors.  
  - Metrics at host level, tier level, and business level (DAU, revenue, etc.).  
  - CI and deployment automation to maintain velocity and reliability.[1]

## Scaling data tier: sharding and NoSQL

- **Vertical DB scaling**: bigger DB server (lots of RAM/CPU) but expensive, limited, and a single point of failure.[1]
- **Horizontal DB scaling (sharding)**:[1]
  - Split data across multiple DBs based on sharding key (e.g., user_id).  
  - Example: user_id % 4 decides shard; each shard has same schema but different rows.[1]
  - Sharding key must distribute data evenly.[1]
  - Challenges: resharding when shards fill or become imbalanced, hotspot/celebrity keys, and joins across shards (often solved with denormalization).[1]

- **Use of NoSQL**: move non‑relational or massive‑scale parts of workload to NoSQL stores to reduce relational DB pressure.[1]

## Key principles summary

- Keep **web tier stateless**.[1]
- Build **redundancy** at every tier (multiple web servers, replicated DBs, multi‑DC).[1]
- **Cache** aggressively.[1]
- Use **CDN** for static assets.[1]
- **Shard** data tier to scale.[1]
- **Decouple** with message queues.[1]
- Continuously **monitor** and **automate** operations.[1]

[1](https://bytes.usc.edu/~saty/courses/docs/data/SystemDesignInterview.pdf)