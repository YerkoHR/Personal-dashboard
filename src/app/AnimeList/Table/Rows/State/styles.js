import styled from "styled-components";

export const StyledWatchedCounter = styled.div`
  display: flex;
  flex-direction: column;

  .Watching {
    border-color: ${props => props.theme.blue};
    color: ${props => props.theme.blue};
  }
  .toWatch {
    border-color: ${props => props.theme.orange};
    color: ${props => props.theme.orange};
  }
  .Completed {
    border-color: ${props => props.theme.green};
    color: ${props => props.theme.green};
  }
  .Dropped {
    border-color: ${props => props.theme.red};
    color: ${props => props.theme.red};
  }
  .standBy {
    border-color: ${props => props.theme.calipso};
    color: ${props => props.theme.calipso};
  }
`;
