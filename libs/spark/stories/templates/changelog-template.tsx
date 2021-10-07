import * as React from 'react';
import { Li, SmCode } from './documentation-template';

const ChangelogTemplate = ({
  history,
}: {
  history: Array<{
    version: `v${string}`;
    versionDate: `${string}-${string}-${string}`;
    changes: Array<string>;
  }>;
}) => (
  <ul>
    {history.map((entry) => (
      <Li key={entry.version}>
        <SmCode>
          {entry.version} ({entry.versionDate})
        </SmCode>
        <ul>
          {entry.changes.map((change, i) => (
            <Li key={i}>{change}</Li>
          ))}
        </ul>
      </Li>
    ))}
  </ul>
);

export default ChangelogTemplate;
