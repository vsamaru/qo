const dateFormat = require('dateformat')
const {google} = require('googleapis')
const sheets = google.sheets({version: 'v4'})
  const creds = {
    "type": "service_account",
    "project_id": "gr0bot",
    "private_key_id": "c5f63db10fd34e49b963430d0cfe6a922cbe32b1",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRpfjAOphI/UDA\nh20PImxKc9MNgRhqb7NvFY1zrKOTKVpJjB70p7FOQQdbyIUvEyXYcfMddhsnYRlj\ndHgtPlkvx7pKGlKhFf558BDpqnUsR9XF6cqTwWPz37DS91eK4FZTRyslOyH544it\nwhvV4hMoqTj2YMLYH/oJDHRojLIr3jRgY2m+Dhf8sMiZsE1kAAOQN5zBUYoqc6Tt\nnD/9w6Wy7P/lTh/pYsPC/j7nL1VG0smLFATVGGuvQK+JmQ6fHnZNQoZ0ODzJcv43\nBZ8rIx50rASKj/19y8ZAq2n/qg8vDEAHQO1p29gBdeVSVaeU5iPpnkr7uRq6r29P\nMGX88rmzAgMBAAECggEAPXLBQ06pXhNkzEmlbJ8xUG08eiPRjTjqRe/yQupiE3s2\nbII2fI0+SeqDhqJybwbUu+lCUetRMCykrWLw6onwyDFpZ9jpSS/SI9l6i5Kbv3va\nq6TH7KDtdAinol4++YShqM0eV05Kuhy37f4L/JfD99IJ0SUxVvmgZtCQuigq/PIf\nIerG7EKsQUAo3ZlKnMO1bl0pHe7Sg9TPU0PoY6wTYQ4/P7AYopcRiBW37rd/lSAW\nwbFSDV4u7Q+Z31t8H/7Vq5WBUBgDtiEWLll0BqYNkm85RodIUw3IyLFqw/4ZGNGT\nRQTZPusN7BN2y88ZEZjSrADDJP+6rE5cVNwJQn6YUQKBgQD2y77rUQhvLvvolkeo\nTTptp5cUysf403GI/7/98jRuFJAfUlzG65m4nJoiaaFbq1oEAEVdInvpbmIMv/mI\nXYukT+vzeg2Sgld2P/WsSAFTjAiHDK953aS5e8RLZD6h4Xas5Q+DD2l5ocaybW7b\ncQWzLCL3G1W6lhy00dLQaMMuWwKBgQDZd5BmE6fzJJ7KX5OpcjfPNtX6ybgc/8Bg\nuPmzvn7785THwoQPq36YycceNC7or9pvId5l03kKoE+tV9u+PKE0ZCeBFZN8OxNs\nknYEE+vhsQputxwCG8XsmsKH1RMNyfhoQJ4AQm1mV3TXWMTGZnXVXKsCjs0rm2Wi\nawXIqvaxiQKBgASQaAt6CCnmOIponRKjuvzkKIsd5OzZHDRoZmiP3iBbCP9LSqPz\nH3imjMMuKOnFFXkVeDLsvFXo0K9jrX20HS0AvWBXVYDsICnzrNtuyXd+E3pL5cLf\nMnirrUmnpPDhdoxkABFwa4bwUvhhxbcRNAXIPy1KuB8nP4ioiLmJ9nIZAoGBAMV/\nd62sxkfkhy2l1ZX6/EJ9O6IylroHbzCobWZXaD3rfsBYoNUWW7fo8KQ2oi+Cna92\nI+N4RiJna1UzSIchywmot9Pcw3/8quxcqz+S1BO5VI8uTwp/LKZv+qGf2lkYhzgv\nDw+PRInAfYWhwbupi/RE365IAH9M9uWlqrAOzFJ5AoGBAO+M+ZxsgQ2lehcNo2Wt\nv40ZkI6rm5RhXyP+4wMVpryyi7HjOmHnf//4ih49QXZx9u9UXomVsC1vxQU84qMA\npzMPKdgsL5Ki+Ml2WRFF+LUF6B2Q+DoAQsE/PQ/CJb2hIp/x7rJOnLVUeAzu5ixh\nk2ZHX5qjfAoE+2jHV/XysOGb\n-----END PRIVATE KEY-----\n",
    "client_email": "tonowzeit@gr0bot.iam.gserviceaccount.com",
    "client_id": "114530192627343371794",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/tonowzeit%40gr0bot.iam.gserviceaccount.com"
  
}
  const config = {
"key": "AIzaSyBP9mj1b_jF_QqKAZKaTwdWXVKuvXNHUA0",
"ssid": "1RE8MOzZWuVO07OpdWM8Ecnqx1fxVhb8M06OxexUEDi0"
}

exports.l = () => {  
  let date = dateFormat(new Date(), 'm/d HH:MM:ss ')
  var rows = []
	jsonData = {'a': date, 'b':"2", 'c':"3", 'n':"4"}
			
	const fields = ['a', 'b', 'c', 'n'];
	fields.forEach(function(field) {
		if (jsonData.hasOwnProperty(field)) {
			rows.push(jsonData[field]);
		}
		else {
			rows.push('');
		} 
	}); 
  var jwt = new google.auth.JWT(
      creds.client_email, null, creds.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']);  
 //const row = [date,  context];
 return sheets.spreadsheets.values.append({
    spreadsheetId: config.ssid,
    range: 'A!A1:A', 
    auth: jwt,
    key: config.key,
    valueInputOption: 'USER_ENTERED',
    resource: {values: [rows]}
  }, function(err, result) {
		if (err) {
			"Error writing sheet"
		}
		else {
			result.data
		}})

};