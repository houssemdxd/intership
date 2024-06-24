const dataForge=require('data-forge');
const pds = require('./sData');

// Assuming your data is already imported or provided in the 'dataArray'

function countSurveyGroupByStatusDanfoJs(pds) {
    // Initialize variables to store counts and total responses
    let holdCount = 0;
    let holdTotalResponses = 0;
    let closedCount = 0;
    let closedTotalResponses = 0;
    let activeCount = 0;
    let activeTotalResponses = 0;
  
    // Iterate through each survey object in the dataArray
    pds.forEach(survey => {
      switch (survey.status) {
        case 'Hold':
          holdCount++;
          holdTotalResponses += survey.numberOfResponses;
          break;
        case 'Closed':
          closedCount++;
          closedTotalResponses += survey.numberOfResponses;
          break;
        case 'Active':
          activeCount++;
          activeTotalResponses += survey.numberOfResponses;
          break;
        default:
          // Ignore surveys with unknown status
          break;
      }
    });
  
    // Construct and return the result object
    return {
      hold: { count: holdCount, totalResponses: holdTotalResponses },
      closed: { count: closedCount, totalResponses: closedTotalResponses },
      active: { count: activeCount, totalResponses: activeTotalResponses }
    };// Function to simulate a delay
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Function to count surveys grouped by status
    async function countSurveyGroupByStatusDanfoJs(pds) {
      // Initialize variables to store counts and total responses
      let holdCount = 0;
      let holdTotalResponses = 0;
      let closedCount = 0;
      let closedTotalResponses = 0;
      let activeCount = 0;
      let activeTotalResponses = 0;
    
      // Iterate through each survey object in the dataArray
      pds.forEach(survey => {
        switch (survey.status) {
          case "Hold":
            holdCount++;
            holdTotalResponses += survey.numberOfResponses;
            break;
          case "Closed":
            closedCount++;
            closedTotalResponses += survey.numberOfResponses;
            break;
          case 'Active':
            activeCount++;
            activeTotalResponses += survey.numberOfResponses;
            break;
          default:
            // Ignore surveys with unknown status
            break;
        }
      });
    
      // Simulate a delay of 10ms (adjust as needed for realistic workload simulation)
      await delay(10);
    
      // Construct and return the result object
      return {
        hold: { count: holdCount, totalResponses: holdTotalResponses },
        closed: { count: closedCount, totalResponses: closedTotalResponses },
        active: { count: activeCount, totalResponses: activeTotalResponses }
      };
    }
    
    // Example usage:
    
    (async () => {
      console.time("countSurveyGroupByStatusDanfoJs");
      const result = await countSurveyGroupByStatusDanfoJs(pds);
      console.timeEnd("countSurveyGroupByStatusDanfoJs");
    
      console.log(result);
    })();
    
  }
  
  // Example usage:
  
  console.time("countSurveyGroupByStatusDanfoJs");
  const result = countSurveyGroupByStatusDanfoJs(pds);
  console.timeEnd("countSurveyGroupByStatusDanfoJs");
  
  console.log(result);
  