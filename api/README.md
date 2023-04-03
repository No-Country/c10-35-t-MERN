# Comands

inside api/src execute the follow commands:

1. `npx sequelize-cli db:create` -> this helps you to create the db who has been specified in config.json
2. `npx sequelize-cli db:migrate`  -> this helps you to migrate the tables into the db
3. `npx sequelize-cli model:generate --name ModelName --attributes firstAttribute:datatype,secondAttribute:datatype` -> this helps you to create new models