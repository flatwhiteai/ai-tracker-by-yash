
// AI Trend Tracker Application - Enhanced Version
class AITrendTracker {
    constructor() {
        this.data = {
            "trends": [
                {"id": 1, "title": "AI Reasoning Models & GPT-5 Development", "category": "Technical Development", "engagement_level": "High", "engagement_score": 88, "mentions": 1403, "sentiment_score": 0.85, "trend_direction": "up", "sources": "OpenAI, The Verge", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T07:15:23.123456", "growth_rate": "+67%", "prediction": "Strong growth expected", "velocity": 15.2, "keywords": ["reasoning", "gpt-5", "artificial intelligence", "language models"]},
                {"id": 2, "title": "Agentic AI Systems for Enterprise", "category": "Technical Development", "engagement_level": "High", "engagement_score": 92, "mentions": 633, "sentiment_score": 0.79, "trend_direction": "up", "sources": "AWS, Microsoft, Google", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T11:15:23.123456", "growth_rate": "+43%", "prediction": "Accelerating adoption", "velocity": 12.8, "keywords": ["agentic", "enterprise", "automation", "business ai"]},
                {"id": 3, "title": "AI Action Plan - Trump Administration", "category": "Industry News", "engagement_level": "High", "engagement_score": 86, "mentions": 1845, "sentiment_score": 0.67, "trend_direction": "up", "sources": "White House, Reuters", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T06:15:23.123456", "growth_rate": "+71%", "prediction": "Policy volatility ahead", "velocity": 18.5, "keywords": ["policy", "government", "regulation", "trump"]},
                {"id": 4, "title": "Mira Murati's Thinking Machines $2B Funding", "category": "Company Updates", "engagement_level": "High", "engagement_score": 84, "mentions": 1190, "sentiment_score": 0.81, "trend_direction": "up", "sources": "TechCrunch, Reuters", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T13:15:23.123456", "growth_rate": "+52%", "prediction": "Market excitement building", "velocity": 14.7, "keywords": ["funding", "startup", "investment", "mira murati"]},
                {"id": 5, "title": "China's AI Development Despite Sanctions", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 69, "mentions": 248, "sentiment_score": 0.72, "trend_direction": "stable", "sources": "New York Times, Reuters", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T14:15:23.123456", "growth_rate": "+18%", "prediction": "Steady progress", "velocity": 3.2, "keywords": ["china", "sanctions", "geopolitics", "competition"]},
                {"id": 6, "title": "AI in Healthcare - 90% Disease Detection", "category": "Technical Development", "engagement_level": "High", "engagement_score": 91, "mentions": 887, "sentiment_score": 0.88, "trend_direction": "up", "sources": "Nature, Medscape", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T08:15:23.123456", "growth_rate": "+63%", "prediction": "Revolutionary breakthrough", "velocity": 16.1, "keywords": ["healthcare", "diagnosis", "medical ai", "breakthrough"]},
                {"id": 7, "title": "Yahoo Japan Mandates Daily AI Use", "category": "Company Updates", "engagement_level": "Medium", "engagement_score": 65, "mentions": 432, "sentiment_score": 0.75, "trend_direction": "up", "sources": "Tech.co", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T09:15:23.123456", "growth_rate": "+12%", "prediction": "Corporate adoption trend", "velocity": 2.8, "keywords": ["corporate", "mandate", "workplace", "adoption"]},
                {"id": 8, "title": "Google's Big Sleep Cyber Security AI", "category": "Product Updates", "engagement_level": "Medium", "engagement_score": 71, "mentions": 356, "sentiment_score": 0.83, "trend_direction": "stable", "sources": "The Hacker News", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T12:15:23.123456", "growth_rate": "+15%", "prediction": "Security focus growing", "velocity": 4.1, "keywords": ["security", "cybersecurity", "google", "vulnerability"]},
                {"id": 9, "title": "Nvidia CEO on AI Job Displacement", "category": "Industry News", "engagement_level": "High", "engagement_score": 89, "mentions": 1567, "sentiment_score": 0.58, "trend_direction": "up", "sources": "Tom's Hardware", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T10:15:23.123456", "growth_rate": "+78%", "prediction": "Ongoing concern", "velocity": 19.3, "keywords": ["jobs", "displacement", "nvidia", "future of work"]},
                {"id": 10, "title": "Microsoft vs Google AI Talent War", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 73, "mentions": 298, "sentiment_score": 0.69, "trend_direction": "stable", "sources": "Indian Express", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T15:15:23.123456", "growth_rate": "+19%", "prediction": "Talent competition intensifying", "velocity": 3.7, "keywords": ["talent", "hiring", "competition", "tech giants"]},
                {"id": 11, "title": "Midjourney Launches AI Video Generation", "category": "Product Updates", "engagement_level": "High", "engagement_score": 87, "mentions": 1234, "sentiment_score": 0.82, "trend_direction": "up", "sources": "TechCrunch", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T16:15:23.123456", "growth_rate": "+58%", "prediction": "Creative AI revolution", "velocity": 13.9, "keywords": ["video", "generation", "creative", "midjourney"]},
                {"id": 12, "title": "EU AI Act Compliance Guidelines", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 67, "mentions": 421, "sentiment_score": 0.71, "trend_direction": "stable", "sources": "European Commission", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T17:15:23.123456", "growth_rate": "+14%", "prediction": "Regulatory clarity improving", "velocity": 2.9, "keywords": ["regulation", "compliance", "eu", "guidelines"]},
                {"id": 13, "title": "xAI Power Plant for 1M GPUs", "category": "Company Updates", "engagement_level": "High", "engagement_score": 85, "mentions": 976, "sentiment_score": 0.77, "trend_direction": "up", "sources": "Tom's Hardware", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T18:15:23.123456", "growth_rate": "+61%", "prediction": "Infrastructure arms race", "velocity": 15.8, "keywords": ["infrastructure", "compute", "xai", "scaling"]},
                {"id": 14, "title": "AI Transforming Financial Services", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 62, "mentions": 312, "sentiment_score": 0.74, "trend_direction": "stable", "sources": "Business Insider", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T19:15:23.123456", "growth_rate": "+11%", "prediction": "Gradual transformation", "velocity": 2.1, "keywords": ["fintech", "banking", "finance", "transformation"]},
                {"id": 15, "title": "Perplexity Pro Advanced Features", "category": "Product Updates", "engagement_level": "Medium", "engagement_score": 68, "mentions": 189, "sentiment_score": 0.79, "trend_direction": "down", "sources": "Indian Express", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T20:15:23.123456", "growth_rate": "+8%", "prediction": "Feature competition", "velocity": 1.2, "keywords": ["search", "features", "perplexity", "ai assistant"]},
                {"id": 16, "title": "AI Voice Assistants Real-Time Processing", "category": "Technical Development", "engagement_level": "High", "engagement_score": 93, "mentions": 743, "sentiment_score": 0.86, "trend_direction": "up", "sources": "Yahoo Finance", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T21:15:23.123456", "growth_rate": "+49%", "prediction": "Voice interface breakthrough", "velocity": 11.7, "keywords": ["voice", "real-time", "processing", "assistants"]},
                {"id": 17, "title": "Meta Poaches Apple AI Researchers", "category": "Company Updates", "engagement_level": "Medium", "engagement_score": 64, "mentions": 267, "sentiment_score": 0.66, "trend_direction": "stable", "sources": "Indian Express", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T05:15:23.123456", "growth_rate": "+13%", "prediction": "Talent mobility high", "velocity": 2.5, "keywords": ["meta", "apple", "talent", "poaching"]},
                {"id": 18, "title": "AI Models with Systemic Risks", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 59, "mentions": 198, "sentiment_score": 0.73, "trend_direction": "stable", "sources": "European Commission", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T04:15:23.123456", "growth_rate": "+16%", "prediction": "Risk awareness growing", "velocity": 3.1, "keywords": ["risks", "safety", "systemic", "concerns"]},
                {"id": 19, "title": "Netflix Uses GenAI in TV Production", "category": "Product Updates", "engagement_level": "Low", "engagement_score": 42, "mentions": 134, "sentiment_score": 0.68, "trend_direction": "stable", "sources": "Netflix", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T03:15:23.123456", "growth_rate": "+7%", "prediction": "Entertainment AI emerging", "velocity": 0.8, "keywords": ["entertainment", "production", "netflix", "content"]},
                {"id": 20, "title": "Stanford AI Index 2025 Release", "category": "Industry News", "engagement_level": "Medium", "engagement_score": 61, "mentions": 287, "sentiment_score": 0.81, "trend_direction": "stable", "sources": "Stanford HAI", "platforms": ["Twitter/X", "LinkedIn", "Google News"], "last_updated": "2025-07-26T02:15:23.123456", "growth_rate": "+9%", "prediction": "Industry benchmark", "velocity": 1.9, "keywords": ["research", "benchmark", "stanford", "index"]}
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
        this.searchQuery = '';
        this.sortBy = 'engagement_score';
        this.sortOrder = 'desc';
        this.watchlist = JSON.parse(localStorage.getItem('ai-tracker-watchlist') || '[]');
        this.notifications = [];
        this.realTimeUpdateInterval = null;
        this.init();
    }

    init() {
        this.renderTrends();
        this.renderOpportunities();
        this.renderSources();
        this.renderWatchlist();
        this.attachEventListeners();
        this.updateLastRefreshTime();
        this.createHoverTooltip();
        this.startRealTimeUpdates();
        this.renderPredictionChart();
        this.renderSentimentChart();
        this.updateFilterCounts();
    }

    createHoverTooltip() {
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

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.renderTrends();
        });

        // Sort functionality
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            const [sortBy, sortOrder] = e.target.value.split('_');
            this.sortBy = sortBy;
            this.sortOrder = sortOrder;
            this.renderTrends();
        });

        // Refresh button
        document.getElementById('refreshBtn').addEventListener('click', () => {
            this.refreshData();
        });

        // Export button
        document.getElementById('exportBtn').addEventListener('click', () => {
            this.exportData();
        });

        // Notification toggle
        document.getElementById('notificationBtn').addEventListener('click', () => {
            this.toggleNotifications();
        });

        // Clear watchlist
        document.getElementById('clearWatchlistBtn').addEventListener('click', () => {
            this.clearWatchlist();
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
            filteredTrends = filteredTrends.filter(trend => trend.category === this.currentFilter);
        }

        // Apply search filter
        if (this.searchQuery) {
            filteredTrends = filteredTrends.filter(trend => 
                trend.title.toLowerCase().includes(this.searchQuery) ||
                trend.keywords.some(keyword => keyword.toLowerCase().includes(this.searchQuery)) ||
                trend.category.toLowerCase().includes(this.searchQuery)
            );
        }

        // Apply sorting
        filteredTrends.sort((a, b) => {
            let aVal = a[this.sortBy];
            let bVal = b[this.sortBy];
            
            if (typeof aVal === 'string') {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }
            
            if (this.sortOrder === 'desc') {
                return bVal > aVal ? 1 : -1;
            } else {
                return aVal > bVal ? 1 : -1;
            }
        });

        trendsGrid.innerHTML = filteredTrends.map(trend => `
            <div class="trend-card ${this.watchlist.includes(trend.id) ? 'in-watchlist' : ''}" data-trend-id="${trend.id}" data-category="${trend.category}">
                <div class="trend-header">
                    <h3 class="trend-title">${trend.title}</h3>
                    <div class="trend-actions">
                        <span class="trend-category">${trend.category}</span>
                        <button class="watchlist-btn" data-trend-id="${trend.id}" title="${this.watchlist.includes(trend.id) ? 'Remove from watchlist' : 'Add to watchlist'}">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="${this.watchlist.includes(trend.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </button>
                    </div>
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
                    <div class="metric">
                        <div class="metric-value">${trend.velocity}</div>
                        <div class="metric-label">Velocity</div>
                    </div>
                </div>

                <div class="trend-prediction">
                    <div class="prediction-label">AI Prediction:</div>
                    <div class="prediction-text">${trend.prediction}</div>
                </div>

                <div class="trend-keywords">
                    ${trend.keywords.slice(0, 3).map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
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
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.watchlist-btn')) {
                    this.showTrendDetails(trendId);
                }
            });

            // Hover listeners
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

        // Add watchlist button listeners
        document.querySelectorAll('.watchlist-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const trendId = parseInt(btn.dataset.trendId);
                this.toggleWatchlist(trendId);
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
                        <span class="tooltip-label">Velocity:</span>
                        <span class="tooltip-value">${trend.velocity} mentions/hour</span>
                    </div>
                    <div class="tooltip-metric">
                        <span class="tooltip-label">Keywords:</span>
                        <span class="tooltip-value">${trend.keywords.join(', ')}</span>
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
                <button class="btn btn--sm btn--outline opportunity-action">Generate Content Ideas</button>
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

    renderWatchlist() {
        const watchlistContainer = document.getElementById('watchlistContainer');
        const watchlistTrends = this.data.trends.filter(trend => this.watchlist.includes(trend.id));
        
        if (watchlistTrends.length === 0) {
            watchlistContainer.innerHTML = '<p class="empty-watchlist">No trends in your watchlist. Click the star icon on any trend to add it.</p>';
            return;
        }

        watchlistContainer.innerHTML = watchlistTrends.map(trend => `
            <div class="watchlist-item">
                <div class="watchlist-trend-title">${trend.title}</div>
                <div class="watchlist-metrics">
                    <span class="watchlist-metric">Score: ${trend.engagement_score}</span>
                    <span class="watchlist-metric">${trend.growth_rate}</span>
                </div>
                <button class="watchlist-remove" data-trend-id="${trend.id}">×</button>
            </div>
        `).join('');

        // Add remove listeners
        document.querySelectorAll('.watchlist-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const trendId = parseInt(btn.dataset.trendId);
                this.toggleWatchlist(trendId);
            });
        });
    }

    renderPredictionChart() {
        const chartContainer = document.getElementById('predictionChart');
        const highVelocityTrends = this.data.trends
            .filter(trend => trend.velocity > 10)
            .sort((a, b) => b.velocity - a.velocity)
            .slice(0, 5);

        chartContainer.innerHTML = `
            <div class="chart-header">
                <h4>High Velocity Trends</h4>
                <span class="chart-subtitle">Mentions per hour</span>
            </div>
            <div class="velocity-bars">
                ${highVelocityTrends.map(trend => `
                    <div class="velocity-bar">
                        <div class="velocity-fill" style="width: ${(trend.velocity / 20) * 100}%"></div>
                        <div class="velocity-info">
                            <div class="velocity-name">${trend.title.substring(0, 30)}...</div>
                            <div class="velocity-value">${trend.velocity}/hr</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderSentimentChart() {
        const chartContainer = document.getElementById('sentimentChart');
        const sentimentData = {
            positive: this.data.trends.filter(t => t.sentiment_score > 0.7).length,
            neutral: this.data.trends.filter(t => t.sentiment_score >= 0.4 && t.sentiment_score <= 0.7).length,
            negative: this.data.trends.filter(t => t.sentiment_score < 0.4).length
        };

        const total = sentimentData.positive + sentimentData.neutral + sentimentData.negative;

        chartContainer.innerHTML = `
            <div class="chart-header">
                <h4>Sentiment Distribution</h4>
            </div>
            <div class="sentiment-donut">
                <div class="sentiment-stats">
                    <div class="sentiment-stat positive">
                        <div class="sentiment-color"></div>
                        <span>Positive: ${sentimentData.positive}</span>
                    </div>
                    <div class="sentiment-stat neutral">
                        <div class="sentiment-color"></div>
                        <span>Neutral: ${sentimentData.neutral}</span>
                    </div>
                    <div class="sentiment-stat negative">
                        <div class="sentiment-color"></div>
                        <span>Negative: ${sentimentData.negative}</span>
                    </div>
                </div>
                <div class="sentiment-circle">
                    <div class="sentiment-percentage">${Math.round((sentimentData.positive / total) * 100)}%</div>
                    <div class="sentiment-label">Positive</div>
                </div>
            </div>
        `;
    }

    handleCategoryFilter(category) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.currentFilter = category;
        this.renderTrends();
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

    toggleWatchlist(trendId) {
        const index = this.watchlist.indexOf(trendId);
        if (index > -1) {
            this.watchlist.splice(index, 1);
        } else {
            this.watchlist.push(trendId);
        }
        
        localStorage.setItem('ai-tracker-watchlist', JSON.stringify(this.watchlist));
        this.renderTrends();
        this.renderWatchlist();
    }

    clearWatchlist() {
        this.watchlist = [];
        localStorage.setItem('ai-tracker-watchlist', JSON.stringify(this.watchlist));
        this.renderTrends();
        this.renderWatchlist();
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
                        <div class="detail-metric">
                            <span class="metric-label">Velocity:</span>
                            <span class="metric-value">${trend.velocity} mentions/hour</span>
                        </div>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h4>AI Prediction & Analysis</h4>
                    <div class="prediction-analysis">
                        <div class="prediction-box">
                            <div class="prediction-title">Forecast:</div>
                            <div class="prediction-content">${trend.prediction}</div>
                        </div>
                        <div class="keywords-section">
                            <div class="keywords-title">Key Terms:</div>
                            <div class="keywords-list">
                                ${trend.keywords.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
                            </div>
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
        
        // Simulate data refresh with some randomization
        setTimeout(() => {
            this.simulateDataUpdate();
            this.updateLastRefreshTime();
            this.renderTrends();
            this.renderPredictionChart();
            this.renderSentimentChart();
            refreshBtn.classList.remove('loading');
            
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

    simulateDataUpdate() {
        // Simulate real-time data changes
        this.data.trends.forEach(trend => {
            // Randomly update mentions
            const change = Math.floor(Math.random() * 20) - 10;
            trend.mentions = Math.max(0, trend.mentions + change);
            
            // Update velocity
            trend.velocity = Math.max(0, trend.velocity + (Math.random() * 2 - 1));
            
            // Slightly adjust sentiment
            trend.sentiment_score = Math.max(0, Math.min(1, trend.sentiment_score + (Math.random() * 0.1 - 0.05)));
        });
    }

    startRealTimeUpdates() {
        this.realTimeUpdateInterval = setInterval(() => {
            this.simulateDataUpdate();
            this.renderPredictionChart();
            this.renderSentimentChart();
            
            // Update last refresh time
            this.updateLastRefreshTime();
        }, 30000); // Update every 30 seconds
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

    toggleNotifications() {
        const btn = document.getElementById('notificationBtn');
        btn.classList.toggle('active');
        
        if (btn.classList.contains('active')) {
            this.startNotificationMonitoring();
            btn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="m13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Notifications On
            `;
        } else {
            btn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6.3 5.7a.9.9 0 0 0-.7.7c0 6.4-3 8.6-3 8.6h18s-3.1-2.2-3.1-8.6a.9.9 0 0 0-.7-.7c-2.6-.2-5.2-.2-7.8 0s-2.6 0-2.7 0z"></path>
                    <path d="m13.73 21a2 2 0 0 1-3.46 0"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
                Notifications Off
            `;
        }
    }

    startNotificationMonitoring() {
        setInterval(() => {
            // Check for high velocity trends
            this.data.trends.forEach(trend => {
                if (trend.velocity > 15 && !this.notifications.includes(trend.id)) {
                    this.showNotification(`🚀 ${trend.title} is trending fast! (${trend.velocity} mentions/hr)`);
                    this.notifications.push(trend.id);
                }
            });
        }, 60000); // Check every minute
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
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

        setTimeout(() => {
            const exportData = {
                report_title: "Enhanced AI Industry Trend Report",
                generated_at: new Date().toISOString(),
                summary: {
                    total_trends: this.data.trends.length,
                    total_mentions: this.data.engagement_metrics.total_mentions,
                    avg_sentiment: Math.round(this.data.engagement_metrics.avg_sentiment * 100) + '%',
                    high_engagement_topics: this.data.engagement_metrics.high_engagement_topics,
                    watchlist_items: this.watchlist.length
                },
                predictions: this.data.trends.map(trend => ({
                    title: trend.title,
                    prediction: trend.prediction,
                    velocity: trend.velocity,
                    keywords: trend.keywords
                })),
                top_trends: this.data.trends.slice(0, 10).map(trend => ({
                    title: trend.title,
                    category: trend.category,
                    engagement_score: trend.engagement_score,
                    mentions: trend.mentions,
                    growth_rate: trend.growth_rate,
                    sentiment: Math.round(trend.sentiment_score * 100) + '%',
                    velocity: trend.velocity,
                    prediction: trend.prediction
                })),
                content_opportunities: this.data.content_opportunities,
                credible_sources: this.data.credible_sources,
                watchlist: this.data.trends.filter(trend => this.watchlist.includes(trend.id))
            };

            const dataStr = JSON.stringify(exportData, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = `enhanced-ai-trend-report-${new Date().toISOString().split('T')[0]}.json`;
            
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

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AITrendTracker();
});
