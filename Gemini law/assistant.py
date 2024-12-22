from pinecone import Pinecone
from pinecone_plugins.assistant.models.chat import Message


pc = Pinecone(api_key="pcsk_2fovAW_JVhafCr5kpDFcCZFQdsceDZmopYckzBywPgJXBoYnXqT8wz85fvRLKQZBGx3nUD")

assistant = pc.assistant.Assistant(
    assistant_name="lawguy"
)




msg = Message(role="user", content="what is the preamble of the constitution?")
resp = assistant.chat(messages=[msg])




print(msg)
print(resp['message']['content'])
##message_content = resp.content

# Print the message content
##print("Assistant response content:", message_content)