import GitHubCalendar from 'react-github-calendar';
import '../css/ContributionGraph.css'

function ContributionGraph() {
  return (
    <div className='contribution-graph'>
        <h2>Contribution Graph</h2>
        <div className="github-calendar">
        <GitHubCalendar username="christianmonsalve850" blockSize={16} />
        </div>
    </div>
  );
}

export default ContributionGraph;
