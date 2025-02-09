/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { TechDocsNotFound } from './TechDocsNotFound';
import React from 'react';
import { screen } from '@testing-library/react';
import { renderInTestApp } from '@backstage/test-utils';

describe('<TechDocsNotFound />', () => {
  it('should render with status code, status message and go back link', async () => {
    await renderInTestApp(<TechDocsNotFound />);
    screen.getByText(/Documentation not found/i);
    screen.getByText(/404/i);
    screen.getByText(/Looks like someone dropped the mic!/i);
    expect(screen.getByTestId('go-back-link')).toBeDefined();
  });
});

describe('<TechDocsNotFound errorMessage="This is a custom error message" />', () => {
  it('should render with status code, custom error message and go back link', async () => {
    await renderInTestApp(
      <TechDocsNotFound errorMessage="This is a custom error message" />,
    );
    screen.getByText(/This is a custom error message/i);
    screen.getByText(/404/i);
    screen.getByText(/Looks like someone dropped the mic!/i);
    expect(screen.getByTestId('go-back-link')).toBeDefined();
  });
});

describe('<TechDocsNotFound statusCode={500} errorMessage="This is a custom error message" />', () => {
  it('should render with a 404 code, custom error message and go back link', async () => {
    await renderInTestApp(
      <TechDocsNotFound errorMessage="This is a custom error message" />,
    );
    screen.getByText(/This is a custom error message/i);
    screen.getByText(/404/i);
    screen.getByText(/Looks like someone dropped the mic!/i);
    expect(screen.getByTestId('go-back-link')).toBeDefined();
  });
});
