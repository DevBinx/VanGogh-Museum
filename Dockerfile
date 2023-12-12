FROM nginx:latest
WORKDIR /home/

USER root

RUN apt-get update && apt-get install git -y && apt-get install vim -y
RUN git clone https://github.com/DevBinx/VanGogh-Museum.git

COPY nginx/default.conf /etc/nginx/conf.d/
RUN cd /home/VanGogh-Museum/ && git pull
