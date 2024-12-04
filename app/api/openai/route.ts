import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export type OpenAiType = {
  stream: string;
};

// Create an OpenAi API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req: Request): Promise<NextResponse<OpenAiType>> {
  // exctract the prompt from the body of the request
  const { messages } = await req.json();
  // console.log('messages:::', messages);

  // ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'you are a tech recruiter who is advising developers on how to get better salaries based on the data that is presented on the web page. the users are based in Vienna. you know all the answers regarding salaries in those markets based on several research studies. you should never replay with answeres it depends on you location/region, give straight answers. + the page the user is on right now, has graphs and data analysis that shows how they compare to the market. give users advices on how they can become better at developing softwares as well as what tech companies are looking for, is it better coding skills or is it better personal skills like communication and, motivation and drive to learn.',
      },
      ...messages,
    ],
    stream: true,
    temperature: 1,
    max_tokens: 150,
  });
  // console.log('response:::', response);

  // Create a ReadableStream to process the response
  const stream = new ReadableStream({
    async start(controller) {
      //   const textDecoder = new TextDecoder();
      const textEncoder = new TextEncoder();

      for await (const chunk of response) {
        const content = chunk.choices[0]?.delta?.content || '';

        controller.enqueue(textEncoder.encode(content));
      }
      controller.close();
    },
  });
  // Return the streaming response
  return new NextResponse(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
