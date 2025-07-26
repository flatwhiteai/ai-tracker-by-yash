// AI Trend Tracker Application
class AITrendTracker {
    constructor() {
        this.data = {
            "trends": [
                {"id": 1, "title": "AI Reasoning Models & GPT-5 Development", "category": "Technical Development", "engagement_level": "High", "engagement_score": 88, "mentions": 1403, "sentiment_score": 0.85, "trend_direction": "up", "sources": "OpenAI, The Verge", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T07:15:23.123456", "growth_rate": "+67%"},
                {"id": 2, "title": "Agentic AI Systems for Enterprise", "category": "Technical Development", "engagement_level": "High", "engagement_score": 92, "mentions": 633, "sentiment_score": 0.79, "trend_direction": "up", "sources": "AWS, Microsoft, Google", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T11:15:23.123456", "growth_rate": "+43%"},
                {"id": 3, "title": "AI Action Plan - Trump Administration", "category": "Industry News", "engagement_level": "High", "engagement_score": 86, "mentions": 1845, "sentiment_score": 0.67, "trend_direction": "up", "sources": "White House, Reuters", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T06:15:23.123456", "growth_rate": "+71%"},
                {"id": 4, "title": "Mira Murati's Thinking Machines $2B Funding", "category": "Company Updates", "engagement_level": "High", "engagement_score": 84, "mentions": 1190, "sentiment_score": 0.81, "trend_direction": "up", "sources": "TechCrunch, Reuters", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T13:15:23.123456", "growth_rate": "+52%"},
                {"id": 5, "title": "China's AI Development Despite Sanctions", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 69, "mentions": 248, "sentiment_score": 0.72, "trend_direction": "stable", "sources": "New York Times, Reuters", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T14:15:23.123456", "growth_rate": "+18%"},
                {"id": 6, "title": "AI in Healthcare - 90% Disease Detection", "category": "Technical Development", "engagement_level": "High", "engagement_score": 91, "mentions": 887, "sentiment_score": 0.88, "trend_direction": "up", "sources": "Nature, Medscape", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T08:15:23.123456", "growth_rate": "+63%"},
                {"id": 7, "title": "Yahoo Japan Mandates Daily AI Use", "category": "Company Updates", "engagement_level": "Medium", "engagement_score": 65, "mentions": 432, "sentiment_score": 0.75, "trend_direction": "up", "sources": "Tech.co", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T09:15:23.123456", "growth_rate": "+12%"},
                {"id": 8, "title": "Google's Big Sleep Cyber Security AI", "category": "Product Updates", "engagement_level": "Medium", "engagement_score": 71, "mentions": 356, "sentiment_score": 0.83, "trend_direction": "stable", "sources": "The Hacker News", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T12:15:23.123456", "growth_rate": "+15%"},
                {"id": 9, "title": "Nvidia CEO on AI Job Displacement", "category": "Industry News", "engagement_level": "High", "engagement_score": 89, "mentions": 1567, "sentiment_score": 0.58, "trend_direction": "up", "sources": "Tom's Hardware", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T10:15:23.123456", "growth_rate": "+78%"},
                {"id": 10, "title": "Microsoft vs Google AI Talent War", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 73, "mentions": 298, "sentiment_score": 0.69, "trend_direction": "stable", "sources": "Indian Express", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T15:15:23.123456", "growth_rate": "+19%"},
                {"id": 11, "title": "Midjourney Launches AI Video Generation", "category": "Product Updates", "engagement_level": "High", "engagement_score": 87, "mentions": 1234, "sentiment_score": 0.82, "trend_direction": "up", "sources": "TechCrunch", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T16:15:23.123456", "growth_rate": "+58%"},
                {"id": 12, "title": "EU AI Act Compliance Guidelines", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 67, "mentions": 421, "sentiment_score": 0.71, "trend_direction": "stable", "sources": "European Commission", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T17:15:23.123456", "growth_rate": "+14%"},
                {"id": 13, "title": "xAI Power Plant for 1M GPUs", "category": "Company Updates", "engagement_level": "High", "engagement_score": 85, "mentions": 976, "sentiment_score": 0.77, "trend_direction": "up", "sources": "Tom's Hardware", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T18:15:23.123456", "growth_rate": "+61%"},
                {"id": 14, "title": "AI Transforming Financial Services", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 62, "mentions": 312, "sentiment_score": 0.74, "trend_direction": "stable", "sources": "Business Insider", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T19:15:23.123456", "growth_rate": "+11%"},
                {"id": 15, "title": "Perplexity Pro Advanced Features", "category": "Product Updates", "engagement_level": "Medium", "engagement_score": 68, "mentions": 189, "sentiment_score": 0.79, "trend_direction": "down", "sources": "Indian Express", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T20:15:23.123456", "growth_rate": "+8%"},
                {"id": 16, "title": "AI Voice Assistants Real-Time Processing", "category": "Technical Development", "engagement_level": "High", "engagement_score": 93, "mentions": 743, "sentiment_score": 0.86, "trend_direction": "up", "sources": "Yahoo Finance", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T21:15:23.123456", "growth_rate": "+49%"},
                {"id": 17, "title": "Meta Poaches Apple AI Researchers", "category": "Company Updates", "engagement_level": "Medium", "engagement_score": 64, "mentions": 267, "sentiment_score": 0.66, "trend_direction": "stable", "sources": "Indian Express", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T05:15:23.123456", "growth_rate": "+13%"},
                {"id": 18, "title": "AI Models with Systemic Risks", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 59, "mentions": 198, "sentiment_score": 0.73, "trend_direction": "stable", "sources": "European Commission", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T04:15:23.123456", "growth_rate": "+16%"},
                {"id": 19, "title": "Netflix Uses GenAI in TV Production", "category": "Product Updates", "engagement_level": "Low", "engagement_score": 42, "mentions": 134, "sentiment_score": 0.68, "trend_direction": "stable", "sources": "Netflix", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T03:15:23.123456", "growth_rate": "+7%"},
                {"id": 20, "title": "Stanford AI Index 2025 Release", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 61, "mentions": 287, "sentiment_score": 0.81, "trend_direction": "stable", "sources": "Stanford HAI", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T02:15:23.123456", "growth_rate": "+9%"}
            ],
            "categories": {"Technical Development": 4, "Company Updates": 4, "Product Updates": 4, "Industry News": 8},
            "engagement_metrics": {"total_mentions": 14960, "avg_sentiment": 0.73, "high_engagement_topics": 9, "trending_up": 6},
            "content_opportunities": [
                {"topic": "AI Reasoning & Logic", "opportunity_score": 92, "gap_analysis": "High search volume, low content saturation", "suggested_content": "Deep dive into AI reasoning capabilities", "target_audience": "AI researchers, enterprise decision makers"},
                {"topic": "Enterprise AI Adoption", "opportunity_score": 88, "gap_analysis": "Growing enterprise interest, limited practical guides", "suggested_content": "Enterprise AI implementation playbook", "target_audience": "CTOs, IT decision makers"},
                {"topic": "AI Regulatory Compliance", "opportunity_score": 85, "gap_analysis": "New regulations, high confusion", "suggested_content": "AI compliance checklist and guidelines", "target_audience": "Legal teams, compliance officers"},
                {"topic": "AI in Healthcare Innovation", "opportunity_score": 82, "gap_analysis": "Breakthrough developments, technical audience", "suggested_content": "Healthcare AI case studies and ROI analysis", "target_audience": "Healthcare executives, medical professionals"}
            ],
            "credible_sources": [
                {"name": "Stanford AI Index", "credibility_score": 95, "type": "Research Institution"},
                {"name": "MIT Technology Review", "credibility_score": 94, "type": "Academic Publication"},
                {"name": "OpenAI Official", "credibility_score": 93, "type": "Company Source"},
                {"name": "Google AI Blog", "credibility_score": 92, "type": "Company Source"},
                {"name": "Microsoft Research", "credibility_score": 91, "type": "Company Source"},
                {"name": "Nature AI", "credibility_score": 95, "type": "Academic Publication"},
                {"name": "AI Magazine", "credibility_score": 88, "type": "Industry Publication"},
                {"name": "TechCrunch AI", "credibility_score": 82, "type": "Tech Media"},
                {"name": "Reuters Technology", "credibility_score": 89, "type": "News Agency"},
                {"name": "McKinsey AI Insights", "credibility_score": 87, "type": "Consulting Firm"}
            ],
            "last_refresh": "2025-07-26T21:15:23.123456"
        };
        
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.renderTrends();
        this.renderOpportunities();
        this.renderSources();
        this.attachEventListeners();
        this.updateLastRefreshTime();
        this.createHoverTooltip();
    }

    createHoverTooltip() {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.id = 'hover-tooltip';
        tooltip.className = 'hover-tooltip hidden';
        document.body.appendChild(tooltip);
    }

    attachEventListeners() {
        // Category filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleCategoryFilter(e.target.dataset.category);
            });
        });

        // Refresh button
        document.getElementById('refreshBtn').addEventListener('click', () => {
            this.refreshData();
        });

        // Export button
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportData();
        });

        // Modal controls
        document.getElementById('modalClose').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('modalBackdrop').addEventListener('click', () => {
            this.closeModal();
        });
    }

    renderTrends() {
        const trendsGrid = document.getElementById('trendsGrid');
        let filteredTrends = this.data.trends;
        
        // Apply category filter
        if (this.currentFilter !== 'all') {
            filteredTrends = this.data.trends.filter(trend => trend.category === this.currentFilter);
        }

        trendsGrid.innerHTML = filteredTrends.map(trend => `
            <div class="trend-card" data-trend-id="${trend.id}" data-category="${trend.category}">
                <div class="trend-header">
                    <h3 class="trend-title">${trend.title}</h3>
                    <span class="trend-category">${trend.category}</span>
                </div>
                
                <div class="trend-metrics">
                    <div class="metric">
                        <div class="metric-value">${trend.engagement_score}</div>
                        <div class="metric-label">Engagement</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${trend.mentions.toLocaleString()}</div>
                        <div class="metric-label">Mentions</div>
                    </div>
                    <div class="metric">
                        <div class="metric-value">${Math.round(trend.sentiment_score * 100)}%</div>
                        <div class="metric-label">Sentiment</div>
                    </div>
                </div>
                
                <div class="trend-footer">
                    <div class="engagement-indicator ${trend.engagement_level.toLowerCase()}">
                        <div class="engagement-dot"></div>
                        ${trend.engagement_level} Discussion
                    </div>
                    <div class="growth-indicator">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                            <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                        ${trend.growth_rate}
                    </div>
                </div>
            </div>
        `).join('');

        // Add click and hover listeners to trend cards
        document.querySelectorAll('.trend-card').forEach(card => {
            const trendId = parseInt(card.dataset.trendId);
            const trend = this.data.trends.find(t => t.id === trendId);
            
            // Click listener
            card.addEventListener('click', () => {
                this.showTrendDetails(trendId);
            });

            // Hover listeners for detailed metrics
            card.addEventListener('mouseenter', (e) => {
                this.showHoverDetails(e, trend);
            });

            card.addEventListener('mouseleave', () => {
                this.hideHoverDetails();
            });

            card.addEventListener('mousemove', (e) => {
                this.updateTooltipPosition(e);
            });
        });
    }

    showHoverDetails(event, trend) {
        const tooltip = document.getElementById('hover-tooltip');
        const detailsHtml = `
            <div class="tooltip-content">
                <div class="tooltip-header">${trend.title}</div>
                <div class="tooltip-metrics">
                    <div class="tooltip-metric">
                        <span class="tooltip-label">Sources:</span>
                        <span class="tooltip-value">${trend.sources}</span>
                    </div>
                    <div class="tooltip-metric">
                        <span class="tooltip-label">Platforms:</span>
                        <span class="tooltip-value">${trend.platforms.join(', ')}</span>
                    </div>
                    <div class="tooltip-metric">
                        <span class="tooltip-label">Trend Direction:</span>
                        <span class="tooltip-value ${trend.trend_direction}">${trend.trend_direction.toUpperCase()}</span>
                    </div>
                    <div class="tooltip-metric">
                        <span class="tooltip-label">Last Updated:</span>
                        <span class="tooltip-value">${new Date(trend.last_updated).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        `;
        
        tooltip.innerHTML = detailsHtml;
        tooltip.classList.remove('hidden');
        this.updateTooltipPosition(event);
    }

    hideHoverDetails() {
        const tooltip = document.getElementById('hover-tooltip');
        tooltip.classList.add('hidden');
    }

    updateTooltipPosition(event) {
        const tooltip = document.getElementById('hover-tooltip');
        const offsetX = 15;
        const offsetY = 15;
        
        tooltip.style.left = (event.pageX + offsetX) + 'px';
        tooltip.style.top = (event.pageY - offsetY) + 'px';
    }

    renderOpportunities() {
        const opportunitiesGrid = document.getElementById('opportunitiesGrid');
        opportunitiesGrid.innerHTML = this.data.content_opportunities.map(opportunity => `
            <div class="opportunity-card">
                <div class="opportunity-header">
                    <h4 class="opportunity-title">${opportunity.topic}</h4>
                    <div class="opportunity-score">${opportunity.opportunity_score}</div>
                </div>
                <p class="opportunity-description">${opportunity.gap_analysis}</p>
                <p class="opportunity-description"><strong>Suggested:</strong> ${opportunity.suggested_content}</p>
                <div class="opportunity-audience">${opportunity.target_audience}</div>
            </div>
        `).join('');
    }

    renderSources() {
        const sourcesList = document.getElementById('sourcesList');
        sourcesList.innerHTML = this.data.credible_sources.slice(0, 6).map(source => `
            <div class="source-item">
                <div class="source-info">
                    <div class="source-name">${source.name}</div>
                    <div class="source-type">${source.type}</div>
                </div>
                <div class="credibility-score">${source.credibility_score}</div>
            </div>
        `).join('');
    }

    handleCategoryFilter(category) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.currentFilter = category;
        this.renderTrends();
        
        // Update filter button text with counts
        this.updateFilterCounts();
    }

    updateFilterCounts() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            const category = btn.dataset.category;
            let count;
            
            if (category === 'all') {
                count = this.data.trends.length;
                btn.textContent = `All Topics (${count})`;
            } else {
                count = this.data.trends.filter(trend => trend.category === category).length;
                btn.textContent = `${category} (${count})`;
            }
        });
    }

    showTrendDetails(trendId) {
        const trend = this.data.trends.find(t => t.id === trendId);
        if (!trend) return;

        const modal = document.getElementById('trendModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = trend.title;
        modalBody.innerHTML = `
            <div class="trend-detail-grid">
                <div class="detail-section">
                    <h4>Overview</h4>
                    <div class="detail-metrics">
                        <div class="detail-metric">
                            <span class="metric-label">Category:</span>
                            <span class="metric-value">${trend.category}</span>
                        </div>
                        <div class="detail-metric">
                            <span class="metric-label">Engagement Score:</span>
                            <span class="metric-value">${trend.engagement_score}/100</span>
                        </div>
                        <div class="detail-metric">
                            <span class="metric-label">Total Mentions:</span>
                            <span class="metric-value">${trend.mentions.toLocaleString()}</span>
                        </div>
                        <div class="detail-metric">
                            <span class="metric-label">Sentiment Score:</span>
                            <span class="metric-value">${Math.round(trend.sentiment_score * 100)}% Positive</span>
                        </div>
                        <div class="detail-metric">
                            <span class="metric-label">Growth Rate:</span>
                            <span class="metric-value">${trend.growth_rate}</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Sources & Platforms</h4>
                    <div class="detail-metric">
                        <span class="metric-label">Key Sources:</span>
                        <span class="metric-value">${trend.sources}</span>
                    </div>
                    <div class="detail-metric">
                        <span class="metric-label">Platforms:</span>
                        <span class="metric-value">${trend.platforms.join(', ')}</span>
                    </div>
                    <div class="detail-metric">
                        <span class="metric-label">Last Updated:</span>
                        <span class="metric-value">${new Date(trend.last_updated).toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>Engagement Analysis</h4>
                    <div class="engagement-level-detail ${trend.engagement_level.toLowerCase()}">
                        <div class="engagement-indicator ${trend.engagement_level.toLowerCase()}">
                            <div class="engagement-dot"></div>
                            ${trend.engagement_level} Engagement Level
                        </div>
                        <p style="margin-top: 12px; color: var(--color-dark-gray); font-size: 14px;">
                            This topic is generating ${trend.engagement_level.toLowerCase()} levels of discussion across platforms 
                            with ${trend.mentions.toLocaleString()} total mentions and a ${trend.growth_rate} growth rate.
                        </p>
                    </div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('trendModal').classList.add('hidden');
    }

    refreshData() {
        const refreshBtn = document.getElementById('refreshBtn');
        refreshBtn.classList.add('loading');
        
        // Simulate data refresh
        setTimeout(() => {
            this.updateLastRefreshTime();
            refreshBtn.classList.remove('loading');
            
            // Show refresh success feedback
            const originalText = refreshBtn.innerHTML;
            refreshBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Data Updated
            `;
            
            setTimeout(() => {
                refreshBtn.innerHTML = originalText;
            }, 2000);
        }, 1500);
    }

    updateLastRefreshTime() {
        const now = new Date();
        document.getElementById('lastUpdateTime').textContent = 
            now.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            }) + ' at ' + 
            now.toLocaleTimeString('en-US', { 
                hour: 'numeric', 
                minute: '2-digit',
                hour12: true 
            });
    }

    exportData() {
        const exportBtn = document.getElementById('exportBtn');
        const originalText = exportBtn.innerHTML;
        
        exportBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path>
            </svg>
            Generating Report...
        `;

        // Simulate export process
        setTimeout(() => {
            // Create export data
            const exportData = {
                report_title: "AI Industry Trend Report",
                generated_at: new Date().toISOString(),
                summary: {
                    total_trends: this.data.trends.length,
                    total_mentions: this.data.engagement_metrics.total_mentions,
                    avg_sentiment: Math.round(this.data.engagement_metrics.avg_sentiment * 100) + '%',
                    high_engagement_topics: this.data.engagement_metrics.high_engagement_topics
                },
                top_trends: this.data.trends.slice(0, 10).map(trend => ({
                    title: trend.title,
                    category: trend.category,
                    engagement_score: trend.engagement_score,
                    mentions: trend.mentions,
                    growth_rate: trend.growth_rate,
                    sentiment: Math.round(trend.sentiment_score * 100) + '%'
                })),
                content_opportunities: this.data.content_opportunities,
                credible_sources: this.data.credible_sources
            };

            // Create and download JSON file
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `ai-trend-report-${new Date().toISOString().split('T')[0]}.json`;
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();

            exportBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Report Downloaded
            `;

            setTimeout(() => {
                exportBtn.innerHTML = originalText;
            }, 2000);
        }, 1000);
    }
}

// Add additional styles for modal details and hover tooltip
const additionalStyles = `
    .trend-detail-grid {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .detail-section h4 {
        color: var(--color-navy-blue);
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 16px;
        padding-bottom: 8px;
        border-bottom: 2px solid var(--color-light-gray);
    }
    
    .detail-metrics {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    
    .detail-metric {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
    }
    
    .detail-metric .metric-label {
        color: var(--color-dark-gray);
        font-weight: 500;
        font-size: 14px;
    }
    
    .detail-metric .metric-value {
        color: var(--color-navy-blue);
        font-weight: 600;
        font-size: 14px;
    }
    
    .engagement-level-detail {
        padding: 16px;
        border-radius: 8px;
        border: 2px solid var(--color-light-gray);
    }
    
    .engagement-level-detail.high {
        background: rgba(16, 185, 129, 0.05);
        border-color: rgba(16, 185, 129, 0.2);
    }
    
    .engagement-level-detail.medium {
        background: rgba(245, 158, 11, 0.05);
        border-color: rgba(245, 158, 11, 0.2);
    }
    
    .engagement-level-detail.low {
        background: rgba(107, 114, 128, 0.05);
        border-color: rgba(107, 114, 128, 0.2);
    }

    /* Hover Tooltip Styles */
    .hover-tooltip {
        position: absolute;
        background: white;
        border: 2px solid var(--color-navy-blue);
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        max-width: 300px;
        font-size: 14px;
        pointer-events: none;
        opacity: 1;
        transition: opacity 0.2s ease;
    }

    .hover-tooltip.hidden {
        opacity: 0;
        pointer-events: none;
    }

    .tooltip-header {
        color: var(--color-navy-blue);
        font-weight: 600;
        font-size: 15px;
        margin-bottom: 12px;
        line-height: 1.3;
    }

    .tooltip-metrics {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .tooltip-metric {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
    }

    .tooltip-label {
        color: var(--color-dark-gray);
        font-weight: 500;
        font-size: 13px;
        flex-shrink: 0;
    }

    .tooltip-value {
        color: var(--color-navy-blue);
        font-weight: 500;
        font-size: 13px;
        text-align: right;
        line-height: 1.3;
    }

    .tooltip-value.up {
        color: var(--engagement-high);
        text-transform: uppercase;
        font-weight: 600;
    }

    .tooltip-value.stable {
        color: var(--engagement-medium);
        text-transform: uppercase;
        font-weight: 600;
    }

    .tooltip-value.down {
        color: var(--engagement-low);
        text-transform: uppercase;
        font-weight: 600;
    }
`;

// Add the additional styles to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AITrendTracker();
});