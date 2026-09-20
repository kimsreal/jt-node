
////////// Main //////////////////////////////////////////////////

console.log('jtnode start');

const exJob = async () => {

	console.log('jtnode key = 1002');
	
	setTimeout( exJob, 5000);
};

exJob();
