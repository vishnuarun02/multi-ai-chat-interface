import OpenAI from 'openai'
import { NextResponse } from 'next/server'

// Initialize OpenAI clients for different providers
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

const xai = new OpenAI({
    apiKey: process.env.XAI_API_KEY,
    baseURL: 'https://api.x.ai/v1',
})

const deepseek = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: 'https://api.deepseek.com',
})

export async function POST(req) {
    try {
        const { messages, model } = await req.json()

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: 'Messages array is required' },
                { status: 400 }
            )
        }

        let client
        let modelName

        // Route to the appropriate client and model
        switch (model) {
            case 'gpt-4o':
                client = openai
                modelName = 'gpt-4o'
                break
            case 'grok-2':
                client = xai
                modelName = 'grok-2-1212'
                break
            case 'deepseek-chat':
                client = deepseek
                modelName = 'deepseek-chat'
                break
            case 'claude-sonnet-4':
                // Claude requires Anthropic SDK - for now, return a placeholder
                return NextResponse.json(
                    { error: 'Claude integration coming soon. Please use another model.' },
                    { status: 501 }
                )
            case 'gemini-pro':
                // Gemini requires Google SDK - for now, return a placeholder
                return NextResponse.json(
                    { error: 'Gemini integration coming soon. Please use another model.' },
                    { status: 501 }
                )
            default:
                client = openai
                modelName = 'gpt-4o'
        }

        // Make the API call
        const completion = await client.chat.completions.create({
            model: modelName,
            messages: messages,
            temperature: 0.7,
            max_tokens: 2000,
        })

        const assistantMessage = completion.choices[0].message.content

        return NextResponse.json({
            message: assistantMessage,
            model: modelName,
        })
    } catch (error) {
        console.error('Chat API Error:', error)

        return NextResponse.json(
            {
                error: error.message || 'An error occurred while processing your request',
                details: error.response?.data || null
            },
            { status: 500 }
        )
    }
}

