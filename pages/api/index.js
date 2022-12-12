import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
    console.log(req);
    
    if (req.method === 'GET') {
      // Process a POST request
      const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        temperature: 0,
        max_tokens: 7,
      });


      res.status(200).json({ name: "response" });
    } else {
      // Handle any other HTTP method
    }
  }
