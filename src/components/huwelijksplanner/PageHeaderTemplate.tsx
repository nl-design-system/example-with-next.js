/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import { Link } from "../utrecht/Link";
import { LanguageToggle } from "../LanguageToggle";

export const PageHeaderTemplate = () => (
  <>
    <p>
      <Link href="/">home</Link>
    </p>
    <LanguageToggle />
  </>
);
