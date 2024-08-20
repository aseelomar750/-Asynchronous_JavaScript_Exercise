// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = [];
let monitoringTaskId;
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).



// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	oneTimeTasks.push({function: func, delay: delay});
	runOneTimeTasks();

	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for (const oneTimeTask of oneTimeTasks)
    {
        setTimeout(oneTimeTask.function, oneTimeTask.delay);
    }
    oneTimeTasks = []; // Clear the `oneTimeTasks` array after running all tasks.
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	console.log("Starting continuous monitoring of space station parameters...");
    monitoringTaskId = setInterval(

        function ()

        {
            console.log("Monitoring space station conditions...");
        },
        5000 // Adjust the delay as needed to simulate continuous monitoring

    );


    runOneTimeTasks(); // Run any tasks scheduled during the monitoring interval.
    // TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskId);
    console.log("Continuous monitoring stopped.");
    runOneTimeTasks(); // Run any tasks scheduled during the monitoring interval.
    // TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	let timeLeft = duration;
    console.log(`Countdown started: ${timeLeft} seconds`);
    const countdownTimerId = setInterval(
        function ()
        {
            console.log(`Time left: ${timeLeft} seconds`);
            timeLeft--;
            if (timeLeft === 0)
            {
                clearInterval(countdownTimerId);
                console.log("Liftoff!");
            }
        },
        1000 // Adjust the delay as needed to simulate the countdown.
    );
    runOneTimeTasks(); // Run any tasks scheduled during the countdown.
    // TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
	startMonitoring(); // Starts monitoring space station conditions.
    addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
    addOneTimeTask(stopMonitoring, 10000); // Stops monitoring before the countdown.
    addOneTimeTask(function () {startCountdown(10);}, 15000); // Starts countdown after all preparations.

    runOneTimeTasks(); // Executes all scheduled one-time tasks.
    // TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.
    // Note: This is just a placeholder for the actual implementation. You'll need to fill in the missing parts.
    // TODO: Use the functions you've created to schedule
}

scheduleMission(); // Starts the mission.
