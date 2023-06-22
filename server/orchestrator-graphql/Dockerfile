# based image yang akan digunakan
FROM node:lts-hydrogen

# path di container dimana berisi codingan kita (path bebas sesuai kesepakatan bersama)
WORKDIR /orchestrator-graphql

# untuk set ENV dalam aplikasi kita
ENV URL_USERS=http://localhost:4001
ENV URL_APP=http://localhost:4002
ENV REDIS_URL=redis://default:aMxEV2Rp2tHjT2jjunXfjipQvlPA09yp@redis-16911.c252.ap-southeast-1-1.ec2.cloud.redislabs.com:16911
ENV REDIS_PORT=16911
# copy deps yang ada di apps ke WORKDIR
COPY ["package.json", "package-lock.json*", "./"]

# Install npm & Mengapus cache
RUN npm install 

# copy semua file & folder ke WORKDIR
COPY . .

# execute apps: production
CMD ["npm", "run", "start"]