#############################
# 		"npm" stage	 		#
#############################
# The base stage for all our stages

FROM node AS nl_portal_next
#ENV NPM_CONFIG_LOGLEVEL info

WORKDIR /home/node/app

# dev solution
COPY . ./
# should be something like this to pick for production
#COPY packadge.json ./
#COPY pages pages/
#COPY styles styles/

# install and build
RUN npm install next react react-dom
