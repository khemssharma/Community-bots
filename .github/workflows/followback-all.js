name: One-tap Follow-back All Followers

on:
  workflow_dispatch:  # Allows you to run the workflow manually via GitHub Actions

jobs:
  run-script:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the repository
      - name: Checkout repository
        uses: actions/checkout@v3

      # Step 2: Set up Node.js environment
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      # Step 3: Install dependencies
      - name: Install Dependencies
        run: |
          npm install axios dotenv

      # Step 4: Run the script
      - name: Run Un-Follow all non-reciprocal
        env:
          GITHUB_USERNAME: ${{ secrets.USERNAME }}
          GITHUB_TOKEN: ${{ secrets.TOKEN }}
        run: |
          node followback.js
