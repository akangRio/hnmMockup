# based image yang akan digunakan
FROM node:lts-hydrogen

# path di container dimana berisi codingan kita (path bebas sesuai kesepakatan bersama)
WORKDIR /app

# untuk set ENV dalam aplikasi kita
ENV JWTSECRET=hehe
ENV DATABASE_URL=postgresql://postgres:karcik-joBnac-0zathu@db.ijvwfhyqqvzhkpzhgslx.supabase.co:5432/postgres
ENV NODE_ENV=production
# copy deps yang ada di apps ke WORKDIR
COPY ["package.json", "package-lock.json*", "./"]

# Install npm & Mengapus cache
RUN npm install 

# copy semua file & folder ke WORKDIR
COPY . .

# execute apps: production
CMD ["npm", "run", "start"]