<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>AI Trading Bot</title>
  <link rel="stylesheet" href="style.css" />
  <!-- Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js"></script>
</head>
<body>
  <div class="container">
    <div class="trading-panel">
      <div class="trading-controls">
        <h2>Trading Controls</h2>
        <div class="form-group">
          <label for="investmentInput">Initial Investment (USD)</label>
          <input type="number" id="investmentInput" value="10000000" />
        </div>
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" id="resetPriceHistoryCheckbox" />
            Reset Price History
          </label>
          <small class="form-hint">Check this if you want to collect new price data</small>
        </div>
        <div class="button-group">
          <button id="simulateBtn" class="btn btn-primary">Start Trading</button>
          <button id="stopBtn" class="btn btn-danger" disabled>Stop Trading</button>
        </div>
      </div>
      
      <div class="portfolio-stats">
        <h2>Portfolio Statistics</h2>
        <div class="stat-group">
          <div class="stat-label">Current Price</div>
          <div class="stat-value" id="currentPrice">$83,654.90</div>
        </div>
        <div class="stat-group">
          <div class="stat-label">Portfolio Value</div>
          <div class="stat-value" id="portfolioValue">$10,005,784.13</div>
        </div>
        <div class="stat-group">
          <div class="stat-label">Profit/Loss</div>
          <div class="stat-value" id="profitLoss">$-204.87 (-0.00%)</div>
        </div>
        <div class="balance-group">
          <div class="balance-item">
            <div class="balance-label">BTC Balance</div>
            <div class="balance-value" id="btcBalance">2.39231882 BTC</div>
          </div>
          <div class="balance-item">
            <div class="balance-label">USD Balance</div>
            <div class="balance-value" id="usdBalance">$9,805,654.94</div>
          </div>
        </div>
      </div>
      
      <div class="trading-stats">
        <h2>Trading Statistics</h2>
        <div class="stat-group">
          <div class="stat-label">Total Trades</div>
          <div class="stat-value" id="totalTrades">10</div>
        </div>
        <div class="stat-group">
          <div class="stat-label">Successful Trades</div>
          <div class="stat-value" id="successfulTrades">10</div>
        </div>
        <div class="stat-group">
          <div class="stat-label">Failed Trades</div>
          <div class="stat-value" id="failedTrades">0</div>
        </div>
        <div class="stat-group">
          <div class="stat-label">Success Rate</div>
          <div class="stat-value" id="successRate">100.00%</div>
        </div>
      </div>
      
      <div class="trading-logs">
        <h2>Trading Logs</h2>
        <div id="tradingLogs" class="logs-container">
          <div class="log-entry">Waiting to start trading...</div>
        </div>
      </div>
    </div>
    
    <div class="chart-panel">
      <h2>Live Price Chart</h2>
      <div class="chart-container">
        <canvas id="priceChart"></canvas>
      </div>
    </div>
    
    <div class="trade-history-panel">
      <h2>Trade History</h2>
      <div class="table-container">
        <table id="tradeTable">
          <tr>
            <th>Time</th>
            <th>Action</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
            <th>Portfolio Value</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
  
  <script src="chart.js"></script>
  <script src="script.js"></script>
</body>
</html>
