# 🌐 Fetch and Display Data from a Public API

This project demonstrates how to use the **JavaScript Fetch API** to retrieve and display user data from a public API. It fetches user information from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) and displays their name, email, and address on a webpage.

---

## ✅ Features

- Fetches data from a public REST API
- Displays user details (name, email, address) in styled cards
- Includes a **Reload Users** button to re-fetch data
- Error handling for network issues
- Responsive, clean UI styling

---

## 🛠 Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (Fetch API)

---

## 🚀 How to Run

1. Download the files: `index.html`, `styles.css`, and `script.js`.
2. Open `index.html` in a web browser (or use Live Server in VS Code).
3. The page will automatically fetch and display the user list.
4. Click the **Reload Users** button to fetch again.
5. Disable internet to test error handling.

---

## 📂 File Structure

```
fetch-api-project/
├── index.html # HTML structure
├── styles.css # Styling for the UI
└── script.js # Fetch API logic
```

---

## 🔗 API Used

- **Endpoint:** `https://jsonplaceholder.typicode.com/users`
- **Type:** GET request
- **Response Format:** JSON

Example Response:
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "city": "Gwenborough"
    }
  }
]
```
👨‍💻 Author

Created by Prakhar Solanki for educational purposes.
