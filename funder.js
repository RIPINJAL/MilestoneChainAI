// Dashboard functionality
class FunderDashboard {
    constructor() {
        this.currentSection = 'overview';
        this.init();
    }

    init() {
        this.setupMenuItems();
        this.setupThemeToggle();
        this.showSection('overview');
    }

    setupMenuItems() {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const href = item.getAttribute('href');
                const section = href.replace('#', '');
                this.showSection(section);
                
                // Update active state
                menuItems.forEach(mi => mi.classList.remove('active'));
                item.classList.add('active');
            });
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('light-theme');
                const isLight = document.body.classList.contains('light-theme');
                themeToggle.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
            });
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    showSection(section) {
        switch(section) {
            case 'overview':
                this.showOverview();
                break;
            case 'discover':
                this.showDiscover();
                break;
            case 'investments':
                this.showInvestments();
                break;
            case 'analytics':
                this.showAnalytics();
                break;
            case 'ai-insights':
                this.showAIInsights();
                break;
            case 'messages':
                this.showMessages();
                break;
        }
    }

    showOverview() {
        const content = document.querySelector('.dashboard-content');
        content.innerHTML = `
            <div class="dashboard-header">
                <h1>Funder Dashboard</h1>
                <p>Track your investments and discover new opportunities with AI-powered insights.</p>
            </div>

            <!-- Metrics Grid -->
            <div class="metrics-grid">
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-wallet"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">₹5.2M</div>
                        <div class="metric-label">Total Invested</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">+18.5%</div>
                        <div class="metric-label">Portfolio Growth</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">12</div>
                        <div class="metric-label">Active Investments</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">89%</div>
                        <div class="metric-label">Success Rate</div>
                    </div>
                </div>
            </div>

            <!-- AI Recommendations -->
            <div class="ai-risk-panel">
                <h3><i class="fas fa-brain"></i> AI Investment Recommendations</h3>
                <div class="risk-results">
                    <div class="result-card">
                        <h4>Recommended Investment</h4>
                        <div class="recommendation invest" onclick="window.MilestoneChain2026.showNotification('Viewing investment details...', 'info')" style="cursor: pointer;">INVEST</div>
                        <p>Blockchain Healthcare Platform</p>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: 92%"></div>
                        </div>
                        <small>92% Confidence • Expected ROI: 24%</small>
                    </div>
                    <div class="result-card">
                        <h4>Market Opportunity</h4>
                        <div class="recommendation caution" onclick="window.MilestoneChain2026.showNotification('Monitoring green energy startup...', 'info')" style="cursor: pointer;">MONITOR</div>
                        <p>Green Energy Startup</p>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: 76%"></div>
                        </div>
                        <small>76% Confidence • Expected ROI: 15%</small>
                    </div>
                </div>
            </div>

            <!-- Investment Projects -->
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-header">
                        <span class="project-category">FinTech</span>
                        <span class="risk-badge risk-low">Low Risk</span>
                    </div>
                    <h3 class="project-title">Digital Payment Solution</h3>
                    <p class="project-creator">Your Investment: ₹250,000</p>
                    <div class="project-funding">
                        <div class="funding-info">
                            <span>₹1,800,000 / ₹2,000,000</span>
                            <span>90%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="project-stats">
                        <span>ROI: +22% • 2 Milestones Left</span>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-header">
                        <span class="project-category">Health</span>
                        <span class="risk-badge risk-medium">Medium Risk</span>
                    </div>
                    <h3 class="project-title">Telemedicine Platform</h3>
                    <p class="project-creator">Your Investment: ₹180,000</p>
                    <div class="project-funding">
                        <div class="funding-info">
                            <span>₹650,000 / ₹1,200,000</span>
                            <span>54%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 54%"></div>
                        </div>
                    </div>
                    <div class="project-stats">
                        <span>ROI: +8% • 4 Milestones Left</span>
                    </div>
                </div>
            </div>
        `;
    }

    showDiscover() {
        const content = document.querySelector('.dashboard-content');
        content.innerHTML = `
            <div class="dashboard-header">
                <h1>Discover Projects</h1>
                <p>Find new investment opportunities with AI-powered matching.</p>
            </div>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-header">
                        <span class="project-category">AI</span>
                        <span class="risk-badge risk-low">Low Risk</span>
                    </div>
                    <h3 class="project-title">Machine Learning Analytics</h3>
                    <p class="project-creator">Created by tech@startup.com</p>
                    <div class="project-funding">
                        <div class="funding-info">
                            <span>₹300,000 / ₹1,500,000</span>
                            <span>20%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 20%"></div>
                        </div>
                    </div>
                    <div class="project-stats">
                        <button class="btn btn-primary" onclick="window.MilestoneChain2026.showNotification('Initiating investment process...', 'success')">Invest Now</button>
                        <button class="btn btn-secondary" onclick="window.MilestoneChain2026.showNotification('Opening project details...', 'info')">View Details</button>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-header">
                        <span class="project-category">Green</span>
                        <span class="risk-badge risk-medium">Medium Risk</span>
                    </div>
                    <h3 class="project-title">Wind Energy Farm</h3>
                    <p class="project-creator">Created by green@energy.com</p>
                    <div class="project-funding">
                        <div class="funding-info">
                            <span>₹800,000 / ₹2,000,000</span>
                            <span>40%</span>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 40%"></div>
                        </div>
                    </div>
                    <div class="project-stats">
                        <button class="btn btn-primary" onclick="window.MilestoneChain2026.showNotification('Initiating investment process...', 'success')">Invest Now</button>
                        <button class="btn btn-secondary" onclick="window.MilestoneChain2026.showNotification('Opening project details...', 'info')">View Details</button>
                    </div>
                </div>
            </div>
        `;
    }

    showInvestments() {
        const content = document.querySelector('.dashboard-content');
        content.innerHTML = `
            <div class="dashboard-header">
                <h1>My Investments</h1>
                <p>Track all your active and completed investments.</p>
            </div>
            <div class="projects-table">
                <table>
                    <thead>
                        <tr>
                            <th>Project</th>
                            <th>Investment</th>
                            <th>Current Value</th>
                            <th>ROI</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Digital Payment Solution</td>
                            <td>₹250,000</td>
                            <td>₹305,000</td>
                            <td>+22%</td>
                            <td><span class="status-completed">Active</span></td>
                            <td><button class="btn btn-secondary" onclick="window.MilestoneChain2026.showNotification('Viewing investment performance...', 'info')">View</button></td>
                        </tr>
                        <tr>
                            <td>Telemedicine Platform</td>
                            <td>₹180,000</td>
                            <td>₹194,400</td>
                            <td>+8%</td>
                            <td><span class="status-completed">Active</span></td>
                            <td><button class="btn btn-secondary" onclick="window.MilestoneChain2026.showNotification('Viewing investment performance...', 'info')">View</button></td>
                        </tr>
                        <tr>
                            <td>E-commerce Platform</td>
                            <td>₹100,000</td>
                            <td>₹135,000</td>
                            <td>+35%</td>
                            <td><span class="status-under-review">Completed</span></td>
                            <td><button class="btn btn-success" onclick="window.MilestoneChain2026.showNotification('Initiating withdrawal process...', 'info')">Withdraw</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    showAnalytics() {
        const content = document.querySelector('.dashboard-content');
        content.innerHTML = `
            <div class="dashboard-header">
                <h1>Portfolio Analytics</h1>
                <p>Detailed analysis of your investment performance with real-time insights.</p>
                <div class="analytics-filters">
                    <select class="filter-select" onchange="updateAnalytics(this.value)">
                        <option value="7d">Last 7 Days</option>
                        <option value="30d" selected>Last 30 Days</option>
                        <option value="90d">Last 90 Days</option>
                        <option value="1y">Last Year</option>
                    </select>
                    <button class="btn btn-secondary" onclick="exportAnalytics()">Export Report</button>
                </div>
            </div>

            <!-- Key Metrics -->
            <div class="analytics-metrics">
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">₹6.1M</div>
                        <div class="metric-label">Portfolio Value</div>
                        <div class="metric-change positive">+17.3% (₹900K)</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-percentage"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">18.5%</div>
                        <div class="metric-label">Total ROI</div>
                        <div class="metric-change positive">+2.1% this month</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-coins"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">₹425K</div>
                        <div class="metric-label">Monthly Returns</div>
                        <div class="metric-change positive">+8.2% vs last month</div>
                    </div>
                </div>
                <div class="metric-card">
                    <div class="metric-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <div class="metric-info">
                        <div class="metric-value">7.2</div>
                        <div class="metric-label">Risk Score</div>
                        <div class="metric-change neutral">Moderate Risk</div>
                    </div>
                </div>
            </div>

            <!-- Charts Grid -->
            <div class="charts-grid">
                <div class="chart-container">
                    <div class="chart-header">
                        <h3>Portfolio Performance</h3>
                        <div class="chart-controls">
                            <button class="chart-btn active" onclick="switchChart('performance', 'line')">Line</button>
                            <button class="chart-btn" onclick="switchChart('performance', 'area')">Area</button>
                        </div>
                    </div>
                    <canvas id="performanceChart" width="400" height="200"></canvas>
                </div>
                <div class="chart-container">
                    <div class="chart-header">
                        <h3>Investment Distribution</h3>
                        <div class="chart-legend" id="distributionLegend"></div>
                    </div>
                    <canvas id="distributionChart" width="400" height="200"></canvas>
                </div>
            </div>

            <!-- Detailed Analytics -->
            <div class="analytics-details">
                <div class="analytics-section">
                    <h3>Top Performing Investments</h3>
                    <div class="performance-list">
                        <div class="performance-item">
                            <div class="performance-info">
                                <span class="project-name">Digital Payment Solution</span>
                                <span class="project-category">FinTech</span>
                            </div>
                            <div class="performance-metrics">
                                <span class="roi positive">+22.0%</span>
                                <span class="value">₹305K</span>
                            </div>
                        </div>
                        <div class="performance-item">
                            <div class="performance-info">
                                <span class="project-name">E-commerce Platform</span>
                                <span class="project-category">Tech</span>
                            </div>
                            <div class="performance-metrics">
                                <span class="roi positive">+35.0%</span>
                                <span class="value">₹135K</span>
                            </div>
                        </div>
                        <div class="performance-item">
                            <div class="performance-info">
                                <span class="project-name">Telemedicine Platform</span>
                                <span class="project-category">Health</span>
                            </div>
                            <div class="performance-metrics">
                                <span class="roi positive">+8.0%</span>
                                <span class="value">₹194K</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="analytics-section">
                    <h3>Risk Analysis</h3>
                    <div class="risk-breakdown">
                        <div class="risk-item">
                            <span class="risk-label">Low Risk</span>
                            <div class="risk-bar">
                                <div class="risk-fill low" style="width: 45%"></div>
                            </div>
                            <span class="risk-percentage">45%</span>
                        </div>
                        <div class="risk-item">
                            <span class="risk-label">Medium Risk</span>
                            <div class="risk-bar">
                                <div class="risk-fill medium" style="width: 35%"></div>
                            </div>
                            <span class="risk-percentage">35%</span>
                        </div>
                        <div class="risk-item">
                            <span class="risk-label">High Risk</span>
                            <div class="risk-bar">
                                <div class="risk-fill high" style="width: 20%"></div>
                            </div>
                            <span class="risk-percentage">20%</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Monthly Breakdown -->
            <div class="monthly-breakdown">
                <h3>Monthly Investment Breakdown</h3>
                <div class="breakdown-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Investments</th>
                                <th>Returns</th>
                                <th>ROI</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>January 2026</td>
                                <td>₹1.2M</td>
                                <td>₹1.45M</td>
                                <td class="positive">+20.8%</td>
                                <td><span class="status-completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>February 2026</td>
                                <td>₹800K</td>
                                <td>₹920K</td>
                                <td class="positive">+15.0%</td>
                                <td><span class="status-completed">Completed</span></td>
                            </tr>
                            <tr>
                                <td>March 2026</td>
                                <td>₹1.5M</td>
                                <td>₹1.65M</td>
                                <td class="positive">+10.0%</td>
                                <td><span class="status-under-review">In Progress</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        
        // Initialize charts after content is loaded
        setTimeout(() => {
            this.initializeCharts();
        }, 100);
    }

    showAIInsights() {
        const content = document.querySelector('.dashboard-content');
        content.innerHTML = `
            <div class="dashboard-header">
                <h1>AI Insights</h1>
                <p>Advanced AI analysis and investment recommendations.</p>
            </div>
            <div class="ai-risk-panel">
                <h3><i class="fas fa-brain"></i> Market Analysis</h3>
                <div class="risk-results">
                    <div class="result-card">
                        <h4>Tech Sector</h4>
                        <div class="recommendation invest" onclick="window.MilestoneChain2026.showNotification('Analyzing tech sector...', 'info')" style="cursor: pointer;">BULLISH</div>
                        <p>Strong growth expected in Q2</p>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: 88%"></div>
                        </div>
                        <small>88% Confidence • +15% Growth</small>
                    </div>
                    <div class="result-card">
                        <h4>Green Energy</h4>
                        <div class="recommendation caution" onclick="window.MilestoneChain2026.showNotification('Analyzing green energy market...', 'info')" style="cursor: pointer;">STABLE</div>
                        <p>Steady growth with low volatility</p>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: 72%"></div>
                        </div>
                        <small>72% Confidence • +8% Growth</small>
                    </div>
                </div>
            </div>
        `;
    }

    showMessages() {
        const content = document.querySelector('.dashboard-content');
        content.innerHTML = `
            <div class="dashboard-header">
                <h1>Messages</h1>
                <p>Communicate with project creators and get updates.</p>
                <button class="btn btn-primary" onclick="composeNewMessage()">New Message</button>
            </div>
            <div class="chat-container">
                <div class="chat-sidebar">
                    <div class="chat-search">
                        <input type="text" placeholder="Search conversations..." class="input-field">
                    </div>
                    <div class="chat-list" id="chatList">
                        <div class="chat-item active" data-chat="creator1">
                            <div class="chat-avatar">
                                <div style="width: 40px; height: 40px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">JS</div>
                            </div>
                            <div class="chat-info">
                                <div class="chat-name">John Smith</div>
                                <div class="chat-email">creator@startup.com</div>
                                <div class="chat-preview">Payment platform updates</div>
                                <div class="chat-time">2 hours ago</div>
                            </div>
                            <div class="chat-status">
                                <span class="unread-count">2</span>
                            </div>
                        </div>
                        <div class="chat-item" data-chat="creator2">
                            <div class="chat-avatar">
                                <div style="width: 40px; height: 40px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">SM</div>
                            </div>
                            <div class="chat-info">
                                <div class="chat-name">Sarah Miller</div>
                                <div class="chat-email">health@platform.com</div>
                                <div class="chat-preview">Milestone completion confirmed</div>
                                <div class="chat-time">5 hours ago</div>
                            </div>
                        </div>
                        <div class="chat-item" data-chat="support">
                            <div class="chat-avatar">
                                <div style="width: 40px; height: 40px; background: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">MC</div>
                            </div>
                            <div class="chat-info">
                                <div class="chat-name">MilestoneChain Support</div>
                                <div class="chat-email">support@milestonechain.io</div>
                                <div class="chat-preview">Investment support available</div>
                                <div class="chat-time">1 day ago</div>
                            </div>
                        </div>
                        <div class="chat-item" data-chat="creator3">
                            <div class="chat-avatar">
                                <div style="width: 40px; height: 40px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">AL</div>
                            </div>
                            <div class="chat-info">
                                <div class="chat-name">Alex Lee</div>
                                <div class="chat-email">green@energy.com</div>
                                <div class="chat-preview">Wind farm project update</div>
                                <div class="chat-time">2 days ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-main" id="chatMain">
                    <div class="chat-header">
                        <div class="chat-header-info">
                            <div style="width: 50px; height: 50px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">JS</div>
                            <div>
                                <h3>John Smith</h3>
                                <p>Digital Payment Solution • creator@startup.com</p>
                                <span class="online-status">Online now</span>
                            </div>
                        </div>
                        <div class="chat-actions">
                            <button class="btn btn-secondary btn-sm" onclick="viewProjectDetails()">View Project</button>
                            <button class="btn btn-primary btn-sm" onclick="scheduleCall()">Schedule Call</button>
                        </div>
                    </div>
                    <div class="chat-messages" id="chatMessages">
                        <div class="message-date">Today</div>
                        <div class="message received">
                            <div class="message-avatar">
                                <div style="width: 35px; height: 35px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem;">JS</div>
                            </div>
                            <div class="message-content">
                                <p>Great news! We've completed the beta testing milestone ahead of schedule. The payment gateway integration is working perfectly.</p>
                                <span class="timestamp">3 hours ago</span>
                            </div>
                        </div>
                        <div class="message received">
                            <div class="message-avatar">
                                <div style="width: 35px; height: 35px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem;">JS</div>
                            </div>
                            <div class="message-content">
                                <p>I've uploaded the test results and documentation to the project dashboard. Would you like to schedule a demo call?</p>
                                <span class="timestamp">3 hours ago</span>
                            </div>
                        </div>
                        <div class="message sent">
                            <div class="message-content">
                                <p>Excellent work! I'm impressed with the progress. Let's schedule a demo call for tomorrow at 2 PM.</p>
                                <span class="timestamp">2 hours ago</span>
                            </div>
                        </div>
                        <div class="message sent">
                            <div class="message-content">
                                <p>Also, I'm ready to release the next milestone funding. The project is exceeding expectations!</p>
                                <span class="timestamp">2 hours ago</span>
                            </div>
                        </div>
                        <div class="message received">
                            <div class="message-avatar">
                                <div style="width: 35px; height: 35px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem;">JS</div>
                            </div>
                            <div class="message-content">
                                <p>Perfect! 2 PM tomorrow works great. Thank you for your continued support and trust in our project.</p>
                                <span class="timestamp">1 hour ago</span>
                                <div class="message-status">✓✓ Read</div>
                            </div>
                        </div>
                    </div>
                    <div class="chat-input">
                        <div class="input-wrapper">
                            <input type="text" id="messageInput" placeholder="Type your message..." class="message-input">
                            <div class="input-actions">
                                <button class="btn-icon" onclick="attachFile()" title="Attach file">
                                    <i class="fas fa-paperclip"></i>
                                </button>
                                <button class="btn-icon" onclick="addEmoji()" title="Add emoji">
                                    <i class="fas fa-smile"></i>
                                </button>
                                <button class="btn btn-primary" onclick="sendMessage()" id="sendBtn">
                                    <i class="fas fa-paper-plane"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize message functionality
        this.initializeMessaging();
    }
    
    initializeMessaging() {
        // Setup chat item clicks
        const chatItems = document.querySelectorAll('.chat-item');
        chatItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove active from all items
                chatItems.forEach(ci => ci.classList.remove('active'));
                // Add active to clicked item
                item.classList.add('active');
                
                // Load chat for selected item
                const chatId = item.dataset.chat;
                this.loadChat(chatId);
            });
        });
        
        // Setup message input
        const messageInput = document.getElementById('messageInput');
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.sendMessage();
                }
            });
        }
        
        // Auto-scroll to bottom of messages
        const messagesContainer = document.getElementById('chatMessages');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
    
    loadChat(chatId) {
        const chats = {
            creator1: {
                name: 'John Smith',
                email: 'creator@startup.com',
                project: 'Digital Payment Solution',
                status: 'Online now',
                avatar: 'JS'
            },
            creator2: {
                name: 'Sarah Miller', 
                email: 'health@platform.com',
                project: 'Telemedicine Platform',
                status: 'Last seen 2 hours ago',
                avatar: 'SM'
            },
            support: {
                name: 'MilestoneChain Support',
                email: 'support@milestonechain.io', 
                project: 'Platform Support',
                status: 'Always available',
                avatar: 'MC'
            },
            creator3: {
                name: 'Alex Lee',
                email: 'green@energy.com',
                project: 'Wind Energy Farm', 
                status: 'Last seen 1 day ago',
                avatar: 'AL'
            }
        };
        
        const chat = chats[chatId];
        if (chat) {
            // Update chat header
            const chatHeader = document.querySelector('.chat-header-info');
            if (chatHeader) {
                chatHeader.innerHTML = `
                    <div style="width: 50px; height: 50px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">${chat.avatar}</div>
                    <div>
                        <h3>${chat.name}</h3>
                        <p>${chat.project} • ${chat.email}</p>
                        <span class="online-status">${chat.status}</span>
                    </div>
                `;
            }
        }
    }
    
    sendMessage() {
        const messageInput = document.getElementById('messageInput');
        const messagesContainer = document.getElementById('chatMessages');
        
        if (messageInput && messageInput.value.trim()) {
            const messageText = messageInput.value.trim();
            const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.className = 'message sent';
            messageElement.innerHTML = `
                <div class="message-content">
                    <p>${messageText}</p>
                    <span class="timestamp">${timestamp}</span>
                </div>
            `;
            
            // Add to messages container
            messagesContainer.appendChild(messageElement);
            
            // Clear input
            messageInput.value = '';
            
            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            // Show notification
            window.MilestoneChain2026.showNotification('Message sent successfully!', 'success');
            
            // Simulate response after 2 seconds
            setTimeout(() => {
                this.simulateResponse(messagesContainer);
            }, 2000);
        }
    }
    
    simulateResponse(container) {
        const responses = [
            "Thanks for your message! I'll get back to you soon.",
            "Great to hear from you! Let me check on that.",
            "I appreciate your feedback. Working on it now.",
            "Perfect timing! I was just about to update you."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const timestamp = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        const responseElement = document.createElement('div');
        responseElement.className = 'message received';
        responseElement.innerHTML = `
            <div class="message-avatar">
                <div style="width: 35px; height: 35px; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 0.8rem;">JS</div>
            </div>
            <div class="message-content">
                <p>${randomResponse}</p>
                <span class="timestamp">${timestamp}</span>
            </div>
        `;
        
        container.appendChild(responseElement);
        container.scrollTop = container.scrollHeight;
    }
    
    initializeCharts() {
        this.drawPerformanceChart();
        this.drawDistributionChart();
    }
    
    drawPerformanceChart() {
        const canvas = document.getElementById('performanceChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Sample data points
        const data = [
            { x: 0, y: 5200000 },
            { x: 1, y: 5350000 },
            { x: 2, y: 5280000 },
            { x: 3, y: 5450000 },
            { x: 4, y: 5620000 },
            { x: 5, y: 5580000 },
            { x: 6, y: 5750000 },
            { x: 7, y: 5890000 },
            { x: 8, y: 5950000 },
            { x: 9, y: 6100000 }
        ];
        
        // Chart dimensions
        const padding = 40;
        const chartWidth = width - 2 * padding;
        const chartHeight = height - 2 * padding;
        
        // Find min/max values
        const minY = Math.min(...data.map(d => d.y));
        const maxY = Math.max(...data.map(d => d.y));
        const maxX = Math.max(...data.map(d => d.x));
        
        // Draw grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        
        // Vertical grid lines
        for (let i = 0; i <= 5; i++) {
            const x = padding + (i * chartWidth / 5);
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, height - padding);
            ctx.stroke();
        }
        
        // Horizontal grid lines
        for (let i = 0; i <= 4; i++) {
            const y = padding + (i * chartHeight / 4);
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }
        
        // Draw line chart
        ctx.strokeStyle = '#00d4ff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (point.x / maxX) * chartWidth;
            const y = height - padding - ((point.y - minY) / (maxY - minY)) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // Draw area fill
        ctx.fillStyle = 'rgba(0, 212, 255, 0.1)';
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + (point.x / maxX) * chartWidth;
            const y = height - padding - ((point.y - minY) / (maxY - minY)) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        // Close the area
        ctx.lineTo(width - padding, height - padding);
        ctx.lineTo(padding, height - padding);
        ctx.closePath();
        ctx.fill();
        
        // Draw data points
        ctx.fillStyle = '#00d4ff';
        data.forEach(point => {
            const x = padding + (point.x / maxX) * chartWidth;
            const y = height - padding - ((point.y - minY) / (maxY - minY)) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        });
        
        // Draw labels
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        
        // Y-axis labels
        for (let i = 0; i <= 4; i++) {
            const value = minY + (i * (maxY - minY) / 4);
            const y = height - padding - (i * chartHeight / 4);
            ctx.fillText('₹' + (value / 1000000).toFixed(1) + 'M', 20, y + 4);
        }
    }
    
    drawDistributionChart() {
        const canvas = document.getElementById('distributionChart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Clear canvas
        ctx.clearRect(0, 0, width, height);
        
        // Data for pie chart
        const data = [
            { label: 'FinTech', value: 35, color: '#00d4ff' },
            { label: 'Health', value: 25, color: '#00ff88' },
            { label: 'AI/Tech', value: 20, color: '#ff6b6b' },
            { label: 'Green Energy', value: 15, color: '#ffd93d' },
            { label: 'Others', value: 5, color: '#a78bfa' }
        ];
        
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 3;
        
        let currentAngle = -Math.PI / 2; // Start from top
        
        // Draw pie slices
        data.forEach(segment => {
            const sliceAngle = (segment.value / 100) * 2 * Math.PI;
            
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
            ctx.closePath();
            
            ctx.fillStyle = segment.color;
            ctx.fill();
            
            // Add stroke
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            currentAngle += sliceAngle;
        });
        
        // Update legend
        const legend = document.getElementById('distributionLegend');
        if (legend) {
            legend.innerHTML = data.map(item => 
                `<div class="legend-item">
                    <div class="legend-color" style="background: ${item.color}"></div>
                    <span>${item.label} (${item.value}%)</span>
                </div>`
            ).join('');
        }
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Global functions for analytics
function updateAnalytics(period) {
    console.log('Updating analytics for period:', period);
    window.MilestoneChain2026.showNotification(\`Analytics updated for \${period}\`, 'success');
}

function exportAnalytics() {
    window.MilestoneChain2026.showNotification('Exporting analytics report...', 'info');
}

function switchChart(chartType, style) {
    const buttons = document.querySelectorAll('.chart-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    window.MilestoneChain2026.showNotification(\`Switched to \${style} chart\`, 'info');
}

// Global functions for messaging
function sendMessage() {
    funderDashboard.sendMessage();
}

function composeNewMessage() {
    window.MilestoneChain2026.showNotification('New message composer coming soon!', 'info');
}

function viewProjectDetails() {
    window.MilestoneChain2026.showNotification('Opening project details...', 'info');
}

function scheduleCall() {
    window.MilestoneChain2026.showNotification('Call scheduling feature coming soon!', 'info');
}

function attachFile() {
    window.MilestoneChain2026.showNotification('File attachment feature coming soon!', 'info');
}

function addEmoji() {
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.value += ' 😊';
        messageInput.focus();
    }
}

// Investor Control Panel Function
let escrowBalance = 50000;   // demo value
let freezeStatus = false;

function freezeFunding() {
    freezeStatus = true;
    
    document.getElementById("freezeMsg").innerHTML = 
    "<i class='fas fa-exclamation-circle'></i> Next milestone funding is temporarily frozen";
    
    document.getElementById("freezeMsg").style.color = "orange";
    
    // Show notification
    if (window.MilestoneChain2026) {
        window.MilestoneChain2026.showNotification('Milestone funding frozen!', 'warning');
    }
}

// Initialize dashboard
const funderDashboard = new FunderDashboard();
