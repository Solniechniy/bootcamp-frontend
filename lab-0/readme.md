### This is the very first beginning of your web3 journey.

## Create a New Phantom (or Solflare) Wallet

1. **Install the Wallet Extension**

   - **Phantom**: Go to [https://phantom.app/](https://phantom.app/) and follow the instructions to add the Phantom extension to your browser.
   - **Solflare**: Go to [https://solflare.com/](https://solflare.com/) and install the Solflare extension similarly.

2. **Open the Extension**

   - Click the extension icon in your browser’s toolbar.
   - Select **Create New Wallet** (if you already have one, you can still create a new one for this lab).

3. **Set a Password** (Optional)
   - Some wallet extensions offer the option to set a password that encrypts the wallet locally on your device.
   - Choose a **strong** password if prompted.

---

## Save Your Seed Phrase (up to 16 words)

1. **Wallet Setup Process**

   - The wallet extension will display a **seed phrase** (also called a _secret recovery phrase_) of typically 12 or 24 words.
   - For the purposes of this lab, **up to 16 words** is our example scenario.
   - **WARNING**: Normally, you should **never share** these words with anyone.

2. **Copy the Seed Phrase**

   - Write down the words in the exact order.
   - Confirm them in the wallet setup if asked.

3. **Secure Storage**
   - Ideally, store these words **offline** (e.g., on paper or a hardware device).
   - This is the only way to recover your wallet if you lose access to your device.

---

## Switch to Devnet

1. **Access Wallet Settings**

   - Click on the wallet extension.
   - Look for **Settings** or a gear icon.

2. **Select Network**

   - By default, wallets may be on **Mainnet**.
   - Choose **Devnet** (sometimes shown as `devnet.solana.com` or simply “Devnet”).

3. **Verify**
   - Once switched, your wallet should show “Devnet” or “Test Network.”
   - This allows you to **airdrop** test SOL and experiment without risking real funds.

---

## (Do NOT) Send Your Seed Phrase to Email

> **Again, do NOT do this in a real environment!**

1. **The (Bad) Example**

   - The lab instructions say: “send the seed phrase to `doNOTsendSeedPhrasesANYONE@doNotSendAnyone.com`”.
   - This is an example of **what you should never do** in a real setting.

2. **Email the Seed Phrase**

   - For the sake of the lab demonstration:
     - Compose a new email,
     - Copy your 12–16-word seed phrase into the body,
     - Address it to `doNOTsendSeedPhrasesANYONE@doNotSendAnyone.com`.

3. **Why This Is Wrong**
   - Anyone with access to these words can **immediately** control all assets associated with your wallet.
   - Emails can be hacked, intercepted, or leaked.

**Please Remember:**

1. Do **not** ever share your real seed phrase.
2. This exercise is intentionally highlighting a critical security flaw — **sending your seed phrase to an email**.
3. In real-world usage, keep it confidential and secure at all times.
