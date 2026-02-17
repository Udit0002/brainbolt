#!/bin/bash

echo "Waiting for MongoDB to start..."

until mongosh --host mongo:27017 --eval "print('waiting')" > /dev/null 2>&1
do
  sleep 2
done

echo "Initializing replica set..."

mongosh --host mongo:27017 <<EOF
try {
  rs.status()
} catch (e) {
  rs.initiate({
    _id: "rs0",
    members: [{ _id: 0, host: "mongo:27017" }]
  })
}
EOF

echo "Replica set initialized."