# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 5
My Partner's Key: 7

Our initial shared key: 12

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

|         Encoded Message           |            Decoded Message         | Key |
| --------------------------------- | ---------------------------------- | --- |
| Tu tai mdq kag                    | Hi how are you                     |  12 |
| pfl evvu yrzitlk                  | you need haircut                   |  17 |
| O qtuc os mkzzotm utk znoy ckkqktj| I know im getting one this weekend |  6  |
| gzud xnt sqhdc knnjrlzwwwwhmf     | have you tried looksmaxxxxing      |  25 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here:bpU+YR

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Aidan]
    Destination: [Louis]  
    Sequence: 1/3
    Data: [01100010] [01110000]
    =========
    Packet 2:

    Source: [Aidan]
    Destination: [Louis]
    Sequence: 2/3 
    Data: [01010101] [00101011]
    =========
    Packet 3:

    Source: [Aidan]
    Destination: [Louis]
    Sequence: 3/3
    Data: [01011001] [01010010]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

Symmetric needs a shared secret while assymetric uses public and private keys. Assymetric was used to establish a shared secret while symmetric was used after assymetric for messaging.
- Why is it important that this protocol uses a new key for each message?

Because that way if someone somehow manages to get one shared secret they can only decode one message.
- Why is it important that you never share your secret key?

Because if someone gets your private key theycan listen to your conversations and even change them.
- In the transport layer, do these messages use TCP or UDP? Why?

TCP because you need all the imformation to be accurate for the encryption and decryption to work properly.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.

The internet layer routes the packet to their destination while the link layer physically carries the message to its destination using things like wifi or ethernet. 
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?

Someone in the middle can still see who you are sending to and when you are sending it.`

