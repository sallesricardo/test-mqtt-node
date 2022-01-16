// https://github.com/mqttjs/MQTT.js

const mqtt = require('mqtt')
require('dotenv').config()

const client = mqtt.connect(process.env.BROKER_URL)
const topicName = process.env.SUBSCRIBE_TOPIC


// connect to same client and subscribe to same topic name
client.on('connect', () => {
    // can also accept objects in the form {'topic': qos}
    client.subscribe(topicName, (err, granted) => {
        if (err) {
            console.log(err, 'err');
        }
        console.log(granted, 'granted')
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
})