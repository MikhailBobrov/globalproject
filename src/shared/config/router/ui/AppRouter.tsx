import { Suspense, FC } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "app/config/routeConfig/routeconfig";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppRouter.module.scss";

interface AppRouterProps {
  className?: string;
}

const AppRouter: FC<AppRouterProps> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(cls.AppRouter, {}, [className])}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default AppRouter;
