// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to dark theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    if (currentTheme === 'light') {
        body.classList.add('light-theme');
        themeToggle.checked = true;
    }

    // Theme toggle event listener
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Funding form submission
    const fundingForm = document.querySelector('.funding-form');
    if (fundingForm) {
        const fundButton = fundingForm.querySelector('.btn-primary');
        if (fundButton) {
            fundButton.addEventListener('click', function(e) {
                e.preventDefault();
                const amount = document.getElementById('fundAmount').value;
                if (amount && amount >= 10) {
                    alert(`Thank you for funding $${amount}! Transaction will be processed on the blockchain.`);
                    document.getElementById('fundAmount').value = '';
                } else {
                    alert('Please enter a valid amount (minimum $10)');
                }
            });
        }
    }

    // Milestone form submission
    const milestoneForm = document.querySelector('.milestone-form');
    if (milestoneForm) {
        milestoneForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const project = document.getElementById('projectSelect').value;
            const milestone = document.getElementById('milestoneNumber').value;
            const description = document.getElementById('milestoneDescription').value;
            const proof = document.getElementById('proofUpload').files[0];

            if (project && milestone && description && proof) {
                alert('Milestone submitted successfully! Validators will review your submission.');
                milestoneForm.reset();
            } else {
                alert('Please fill in all fields and upload proof.');
            }
        });
    }

    // Validation buttons
    const approveButtons = document.querySelectorAll('.btn-success');
    const rejectButtons = document.querySelectorAll('.btn-danger');

    approveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.validation-card');
            const projectName = card.querySelector('h3').textContent;
            if (confirm(`Approve milestone for "${projectName}"? Funds will be released to the creator.`)) {
                alert('Milestone approved! Funds released via smart contract.');
                card.style.opacity = '0.5';
                this.disabled = true;
            }
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.validation-card');
            const projectName = card.querySelector('h3').textContent;
            const reason = prompt(`Reject milestone for "${projectName}"?\nPlease provide a reason:`);
            if (reason) {
                alert('Milestone rejected. Creator has been notified.');
                card.style.opacity = '0.5';
                this.disabled = true;
            }
        });
    });

    // File upload label update
    const fileInput = document.getElementById('proofUpload');
    if (fileInput) {
        fileInput.addEventListener('change', function() {
            const fileName = this.files[0]?.name || 'Choose file or drag here';
            const label = document.querySelector('.upload-text');
            if (label) {
                label.textContent = fileName;
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards for animation
    document.querySelectorAll('.card, .project-card, .stat-card, .validation-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });

    // Mobile menu toggle (if needed in future)
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });
    }

    // Add active class to current page nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--accent)';
        }
    });

    // Simulate real-time updates for system dashboard
    if (document.querySelector('.activity-list')) {
        setInterval(function() {
            const activityTimes = document.querySelectorAll('.activity-time');
            activityTimes.forEach(time => {
                const text = time.textContent;
                if (text.includes('min ago')) {
                    const mins = parseInt(text);
                    if (!isNaN(mins)) {
                        time.textContent = `${mins + 1} min ago`;
                    }
                }
            });
        }, 60000); // Update every minute
    }
});

// Add glow effect on hover for accent elements
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('btn-primary')) {
        e.target.style.transition = 'all 0.3s ease';
    }
});

// Prevent form submission on Enter key (except textarea)
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form && !e.target.classList.contains('btn')) {
            e.preventDefault();
        }
    }
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('btn-link')) {
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Console welcome message
console.log('%c🔗 MilestoneChain', 'color: #39FF14; font-size: 24px; font-weight: bold;');
console.log('%cDecentralized Milestone-Based Funding Platform', 'color: #39FF14; font-size: 14px;');
console.log('%cBuilt with Web3 & AI', 'color: #888; font-size: 12px;');
