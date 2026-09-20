
////////// Main //////////////////////////////////////////////////

console.log('jtnode start');

const exJob = async () => {

	console.log('jtnode key = 1000');
	
	setTimeout( exJob, 5000);
};

exJob();
