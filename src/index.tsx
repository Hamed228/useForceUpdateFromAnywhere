import React from 'react'

import { useState, useCallback } from 'react';

export const useForceUpdate = (): () => void => {
  const [, force2Update] = useState<{}>(Object.create(null));

  const forceUpdate = useCallback((): void => {
    force2Update(Object.create(null));
  }, [force2Update]);

  return forceUpdate;
}

interface IMainFactoy extends Object {
  forceToUpdate: (componentName: string) => void;
}
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
export const useForceUpdateFromAnywhere = (mainFactory: IMainFactoy, componentName: string, cleaningCallBack?: () => void): void => {
  const [, force2Update] = useState<{}>(Object.create(null));

  const forceUpdate = useCallback((): void => {
    force2Update(Object.create(null));
  }, [force2Update]);

  useEvents(mainFactory, componentName, forceUpdate);

  useIsomorphicLayoutEffect(() => {
    return () => {
      cleaningCallBack && cleaningCallBack();
      delete (mainFactory as any).eventsForForceUpdate;
    };
  }, [mainFactory, componentName]);
}

export const useEvents = (mainFactory: any, componentName: string, forceUpdate: () => void): void => {
  if (typeof mainFactory.eventsForForceUpdate === 'undefined') {
    mainFactory.eventsForForceUpdate = {};

    const trigger = (cp: string): void => {
      const handlers = mainFactory.eventsForForceUpdate[`on${cp}Change`];

      if (handlers && typeof handlers === 'function') {
        handlers.apply(null, null)
      }
    };

    mainFactory.forceToUpdate = (cp: string) => trigger(cp);
  }

  if (!Object.prototype.hasOwnProperty.call(mainFactory.eventsForForceUpdate, componentName)) {
    mainFactory.eventsForForceUpdate[`on${componentName}Change`] = forceUpdate;
  }
}