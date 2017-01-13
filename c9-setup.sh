# make sure nvm can be called, see http://unix.stackexchange.com/questions/184508/nvm-command-not-available-in-bash-script
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc

rm -rf node_modules 
git checkout node_modules/execfile 
nvm install 6 
#setting variables for highcharts export module, see https://github.com/highcharts/node-export-server
echo 'export ACCEPT_HIGHCHARTS_LICENSE=YES' >> ~/.bashrc
npm install 
#npm run build