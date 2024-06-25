const dataForge=require('data-forge');
const pds = require('./sData');


function countSurveyGroupByStatusDanfoJs(pds) {
    let holdCount = 0;
    let holdTotalResponses = 0;
    let closedCount = 0;
    let closedTotalResponses = 0;
    let activeCount = 0;
    let activeTotalResponses = 0;
  
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
          break;
      }
    });
  
    return {
      hold: { count: holdCount, totalResponses: holdTotalResponses },
      closed: { count: closedCount, totalResponses: closedTotalResponses },
      active: { count: activeCount, totalResponses: activeTotalResponses }
    };
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function countSurveyGroupByStatusDanfoJs(pds) {
      let holdCount = 0;
      let holdTotalResponses = 0;
      let closedCount = 0;
      let closedTotalResponses = 0;
      let activeCount = 0;
      let activeTotalResponses = 0;
    
      pds.forEach(survey => {
        switch (survey.status) {
          case "Hold":
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
            break;
        }
      });
    
      await delay(10);
    
      return {
        hold: { count: holdCount, totalResponses: holdTotalResponses },
        closed: { count: closedCount, totalResponses: closedTotalResponses },
        active: { count: activeCount, totalResponses: activeTotalResponses }
      };
    }
    
    
    (async () => {
      console.time("countSurveyGroupByStatusDanfoJs");
      const result = await countSurveyGroupByStatusDanfoJs(pds);
      console.timeEnd("countSurveyGroupByStatusDanfoJs");
    
      console.log(result);
    })();
    
  }
  
  
  console.time("countSurveyGroupByStatusDanfoJs");
  const result = countSurveyGroupByStatusDanfoJs(pds);
  console.timeEnd("countSurveyGroupByStatusDanfoJs");
  
  console.log(result);
  