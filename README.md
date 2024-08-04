# OpenAI Chatbot Validation Application

## Overview

This project demonstrates a chatbot validation mechanism by comparing responses from two different OpenAI models. The primary goal is to identify failed scenarios where the responses from the two models do not match. The application sends the same query to both models, expects a single-word response, and compares these responses to validate their consistency.

## Features

- **Input and Response Handling**: Users can input a query, and the application sends this query to two different OpenAI models.
- **Single-word Responses**: The application instructs the models to respond with a single word.
- **Comparison and Validation**: The responses from both models are compared. If the responses are identical, the validation is marked as `true`. If they differ, the validation is `false`.
- **Error Handling**: The application handles errors gracefully, displaying appropriate messages if the API calls fail.

## Advantages

1. **Error Identification**: By comparing the responses from two models, this application helps identify inconsistencies and failed scenarios, which is crucial for improving the reliability of AI models.
2. **Model Comparison**: It provides a straightforward way to compare the performance of different OpenAI models on the same input.
3. **Real-time Validation**: The application performs real-time validation of model responses, which is useful for applications requiring high reliability.
4. **User-friendly Interface**: With a simple and clean UI, users can easily input queries and view the results and validation status.

## How It Works

1. **User Input**: The user types a query into the input box and submits it.
2. **API Requests**: The application sends the query to two different OpenAI models (e.g., `gpt-4o-mini` and `text-davinci-003`), requesting a single-word response.
3. **Response Handling**: The responses from both models are stored in variables.
4. **Validation Check**: The application compares the responses. If they match, it sets the validation status to `true`. If they do not match, it sets the validation status to `false`.
5. **Display Results**: The responses and validation status are displayed on the screen.

## Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/openai-chatbot-validation.git
    cd openai-chatbot-validation
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Add Your OpenAI API Key**:
   - Replace `YOUR_API_KEY` in `Chat.js` with your actual OpenAI API key.

4. **Run the Application**:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter your query into the input box and click the "Send" button.
3. View the responses from both models and the validation status.
4. Click the "Compare" button to manually trigger the comparison of responses if needed.

## Future Enhancements

- **Additional Models**: Support for more models to broaden comparison.
- **Extended Validation**: More complex validation logic based on the context and length of responses.
- **Detailed Reporting**: Generate reports for failed scenarios to analyze model performance.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [OpenAI](https://www.openai.com) for providing the powerful language models.
- The React and Axios communities for their excellent libraries.

