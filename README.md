Part of Web Development - ISMIN

Course followed by students of Mines St Etienne, ISMIN - M2 Computer Science.

# TP3: Introduction to asynchronous operations management

## 📝 Goal

The goal of this TP is to discover 2 features of JS/TS language to deal with asynchronous operations:
 - Promises
 - async/await 

### Step 1: ♻️ Prepare the sources

Copy/paste `src` and `package.json` of TP2 in this project. Run `npm install` to fetch the dependencies.

### Step 2: 📚 Create a static dataset

Create a `dataset.json` file in `src` folder and fill it with a valid JSON array containing books data.

### Step 3: 👓 Parse and use the static dataset

- Find a way to execute code when `BookService` is bootstrapped.
- Use the `readFile` function available in Node.js to read the dataset, in callback mode
- Parse the content of the file to a TypeScript object and use it to populate the map/array used to store books in the `BookService`

### Step 4: ↔️ Use Promises instead of callbacks

Use the promise implementation of `readFile`

### Step 5: ↔️ Use async/await instead of Promises

Replace Promise syntax with async/await.

## 🔑 Solution

An implementation of the TP is available on `solution` branch. To switch to the solution just do:

```
# Commit or revert your local changes
# git add . && git commit -m "YOUR_MSG" 

# Update your repository
git pull

# Switch to `solution` branch
git checkout solution
```
