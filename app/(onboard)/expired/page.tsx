import { env } from '~/env.mjs';
import { userFormClasses } from '../_shared';
import { Button } from '~/components/ui/Button';
import { resetAppSettings } from '~/app/_actions';

export default function Page() {
  return (
    <div className={userFormClasses}>
      <h1 className="mb-4 text-2xl font-bold">Installation expired</h1>
      <p className="mb-6">
        You did not configure this deployment of Fresco in time, and it has now
        been locked down for your security.
      </p>
      <p>
        Please redploy a new instance of Fresco to continue using the software.
      </p>
      {env.NODE_ENV === 'development' && (
        <form action={() => void resetAppSettings()}>
          <Button className="mt-6 max-w-[20rem]" type="submit">
            Dev mode: Reset Configuration
          </Button>
        </form>
      )}
    </div>
  );
}
