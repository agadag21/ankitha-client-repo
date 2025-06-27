// Client data
const clientData = {
  meta: {
    title: "Meta | Facebook",
    subtitle: "Product Leadership & ML Solutions",
    description:
      "Assembled and led cross-functional teams to successfully deliver products and ML models across Meta's core investments:",
    highlights: [
      "Collaborated across 135+ internal customers",
      "Fueled $1 billion in creator programs",
      "Delivered ML-driven personalization solutions",
    ],
    projects: [
      {
        title: "Skills Data Platform",
        description:
          "Launched a 'Skills' data platform which supported over 100k employees and a Career Expectations UI, resulting in improved workforce efficiency, talent mobility and equity in the performance review process noted by 87% positive sentiment score.",
      },
      {
        title: "Product Team Leadership",
        description:
          "Assembled and led a product team from ideation to a successful 0-1 launch building support for the 700k+ external developers using Meta's services. Scaled support coverage for top developer pain points by 400% through ML driven personalization and self-serve resources.",
      },
      {
        title: "Global Roadmap Process",
        description:
          "Developed and led the implementation of a global roadmap process at Meta, enabling engineering teams to align their strategies and collaborate on shared solutions, resulting in a 210% increase in engineering productivity and efficiency gains.",
      },
      {
        title: "Prioritization Framework",
        description:
          "Designed a channel for escalations and developed a prioritization framework for ad-hoc requests. Identified manual redundancies and designed a plug-in for automation of prioritization, reducing overhead of maintenance by 360+ hours.",
      },
    ],
    technologies: ["Machine Learning", "Python", "React", "GraphQL", "Data Analytics", "Product Management", "Agile"],
  },
  google: {
    title: "Google",
    subtitle: "Search Infrastructure & Analytics",
    description:
      "Led the development of search infrastructure improvements and analytics platforms that enhanced query processing speed and user experience across multiple Google products.",
    highlights: [
      "Improved query processing speed by 40%",
      "Enhanced user experience for 500M+ daily users",
      "Developed real-time analytics dashboards for product teams",
    ],
    projects: [
      {
        title: "Search Query Optimization",
        description:
          "Redesigned the query processing pipeline to reduce latency by 40% and improve result relevance through advanced machine learning algorithms.",
      },
      {
        title: "Analytics Platform",
        description:
          "Built a comprehensive analytics platform that provided real-time insights into user behavior, enabling product teams to make data-driven decisions and improve user engagement by 25%.",
      },
    ],
    technologies: ["TensorFlow", "BigQuery", "Cloud Dataflow", "Java", "Python", "Data Analytics", "Machine Learning"],
  },
  amazon: {
    title: "Amazon",
    subtitle: "Supply Chain Optimization",
    description:
      "Led the development of supply chain optimization algorithms that significantly improved delivery times and inventory management across multiple distribution centers.",
    highlights: [
      "Reduced delivery times by 22%",
      "Improved inventory management across 15 distribution centers",
      "Increased customer satisfaction scores by 18%",
    ],
    projects: [
      {
        title: "Predictive Inventory System",
        description:
          "Developed an AI-driven predictive inventory system that reduced stockouts by 35% and optimized warehouse space utilization by 28%.",
      },
      {
        title: "Last-Mile Delivery Optimization",
        description:
          "Created routing algorithms that improved last-mile delivery efficiency by 22%, reducing fuel costs and environmental impact while improving delivery speed.",
      },
    ],
    technologies: [
      "AWS",
      "Python",
      "Operations Research",
      "Machine Learning",
      "Supply Chain",
      "Logistics",
      "Optimization Algorithms",
    ],
  },
  microsoft: {
    title: "Microsoft",
    subtitle: "Azure Cloud Solutions",
    description:
      "Architected cloud migration strategies for enterprise clients, resulting in significant cost reduction and improved system reliability.",
    highlights: [
      "35% cost reduction for enterprise clients",
      "Achieved 99.99% system uptime",
      "Migrated 200+ applications to Azure cloud",
    ],
    projects: [
      {
        title: "Enterprise Cloud Migration",
        description:
          "Led comprehensive cloud migration projects for Fortune 500 companies, ensuring seamless transition with minimal downtime.",
      },
    ],
    technologies: ["Azure", ".NET", "Kubernetes", "Docker", "CI/CD", "Cloud Architecture"],
  },
  salesforce: {
    title: "Salesforce",
    subtitle: "Customer Experience Platform",
    description:
      "Developed custom CRM solutions that increased sales team efficiency and improved customer retention rates through enhanced data analytics and personalization.",
    highlights: ["45% increase in sales team efficiency", "28% improvement in customer retention"],
    projects: [
      {
        title: "Custom CRM Solutions",
        description:
          "Built tailored CRM workflows and automation that streamlined sales processes and improved customer relationship management.",
      },
    ],
    technologies: ["Salesforce", "Apex", "Lightning Web Components", "CRM", "Data Analytics"],
  },
  adobe: {
    title: "Adobe",
    subtitle: "Creative Cloud Integration",
    description:
      "Led the integration of AI-powered features into Creative Cloud applications, enhancing user productivity and expanding market reach to new customer segments.",
    highlights: ["30% increase in user productivity", "Expanded market reach to new customer segments"],
    projects: [
      {
        title: "AI-Powered Creative Tools",
        description:
          "Integrated machine learning capabilities into creative applications to automate repetitive tasks and enhance user creativity.",
      },
    ],
    technologies: ["Adobe Creative Cloud", "AI/ML", "JavaScript", "React", "UX Design"],
  },
}

// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate")
      }
    })
  }, observerOptions)

  // Observe elements for scroll animation
  document.querySelectorAll(".portfolio-card, .bio-content, .cta-section").forEach((el) => {
    el.classList.add("scroll-animate")
    observer.observe(el)
  })

  // Add loading animation
  document.body.classList.add("loading")
})

// Show client details in modal
function showClientDetails(clientKey) {
  const client = clientData[clientKey]
  if (!client) return

  const modalBody = document.getElementById("modalBody")

  modalBody.innerHTML = `
    <h2 style="color: #ffffff; margin-bottom: 16px; font-size: 1.75rem;">${client.title}</h2>
    <p style="color: #a78bfa; font-size: 1.125rem; margin-bottom: 24px; font-weight: 500;">${client.subtitle}</p>
    <p style="color: #d1d5db; margin-bottom: 24px; line-height: 1.7;">${client.description}</p>
    
    <h3 style="color: #ffffff; margin-bottom: 16px; font-size: 1.25rem;">Key Achievements</h3>
    <ul style="color: #d1d5db; margin-bottom: 32px; padding-left: 20px;">
      ${client.highlights.map((highlight) => `<li style="margin-bottom: 8px; line-height: 1.6;">${highlight}</li>`).join("")}
    </ul>
    
    <h3 style="color: #ffffff; margin-bottom: 16px; font-size: 1.25rem;">Major Projects</h3>
    <div style="margin-bottom: 32px;">
      ${client.projects
        .map(
          (project) => `
        <div style="background: rgba(55, 65, 81, 0.5); padding: 20px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #374151;">
          <h4 style="color: #ffffff; margin-bottom: 8px; font-size: 1.1rem; font-weight: 600;">${project.title}</h4>
          <p style="color: #d1d5db; line-height: 1.6;">${project.description}</p>
        </div>
      `,
        )
        .join("")}
    </div>
    
    <h3 style="color: #ffffff; margin-bottom: 16px; font-size: 1.25rem;">Technologies Used</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      ${client.technologies
        .map(
          (tech) => `
        <span style="background: #374151; color: #ffffff; padding: 6px 12px; border-radius: 16px; font-size: 0.875rem; font-weight: 500;">${tech}</span>
      `,
        )
        .join("")}
    </div>
  `

  document.getElementById("clientModal").style.display = "block"
  document.body.style.overflow = "hidden" // Prevent background scrolling
}

// Close modal
function closeModal() {
  document.getElementById("clientModal").style.display = "none"
  document.body.style.overflow = "auto" // Restore scrolling
}

// Close modal when clicking outside
window.onclick = (event) => {
  const modal = document.getElementById("clientModal")
  if (event.target === modal) {
    closeModal()
  }
}

// Close modal with Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})

// Add click handlers to portfolio cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".portfolio-card")

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const clientKey = this.getAttribute("data-client")
      showClientDetails(clientKey)
    })
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 15, 35, 0.95)"
  } else {
    navbar.style.background = "rgba(15, 15, 35, 0.9)"
  }
})
