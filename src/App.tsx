import "./index.css";
import { nav } from "./links";
import { useCallback, useRef, useState } from "react";
import { flushSync } from "react-dom";

function App() {
  const [activeSub, _setActiveSub] = useState<null | number>(null);
  const isTranstioningRef = useRef(false);
  const prevSubRef = useRef<null | number>(null);

  const updateNavigation = (id: number | null) => {
    if (prevSubRef.current && id) {
      document.documentElement.style.setProperty(
        "--subnav-direction",
        prevSubRef.current < id ? "1" : "-1",
      );
    }
    _setActiveSub(id);
  };

  const setActiveSub = useCallback(
    async (id: number | null) => {
      if (isTranstioningRef.current || id === activeSub) return;

      isTranstioningRef.current = true;
      if (document.startViewTransition) {
        const transition = document.startViewTransition(() => {
          flushSync(() => {
            updateNavigation(id);
          });
        });
        await transition.finished;
      } else {
        updateNavigation(id);
      }

      isTranstioningRef.current = false;
      prevSubRef.current = id;
    },
    [activeSub],
  );

  return (
    <div className="bg-slate-200">
      <div
        role="figure"
        className="absolute left-0 right-0 top-0 h-[400px] w-full bg-gradient-to-tr from-blue-700 to-blue-900 [clip-path:polygon(0_100%,100%_0,0_0)]"
      >
        <div className="absolute -left-24 top-0 h-[400px] w-[80vw] rounded-full bg-red-400 blur-3xl" />
        <div className="absolute right-0 top-0 h-64 w-[40vw] rounded-full bg-orange-400 blur-[100px]" />
      </div>
      <main className="relative z-10 min-h-screen px-12 pt-36">
        <header className="fixed left-12 right-12 top-0 flex items-baseline gap-4 py-4 text-white">
          <p className="text-2xl">
            <strong>MEGA</strong>menu
          </p>
          <nav onPointerLeave={() => setActiveSub(null)}>
            <ul className="group flex">
              {nav.map((item) => (
                <li
                  key={item.id}
                  className="relative"
                  onPointerEnter={() => setActiveSub(item.id)}
                >
                  {!item.subnavigation && (
                    <a href={item.title} className="peer block px-2 py-2">
                      {item.title}
                    </a>
                  )}
                  {item.subnavigation && (
                    <>
                      <button
                        className="peer block px-2 py-2"
                        onFocus={() => setActiveSub(item.id)}
                        onClick={() => setActiveSub(item.id)}
                        aria-expanded={activeSub === item.id}
                        aria-controls={`subnav-${item.id}`}
                      >
                        {item.title}
                      </button>
                      <div
                        id={`subnav-${item.id}`}
                        className="absolute left-0 top-full hidden w-[500px] rounded-lg bg-white p-1 text-black [view-transition-name:subnav] peer-aria-expanded:block"
                      >
                        <div className="absolute -top-2 left-8 h-0 w-0 border-b-[12px] border-l-[12px] border-r-[12px] border-b-white border-l-transparent border-r-transparent" />
                        <div className="flex [view-transition-name:subnavcontent]">
                          {item.leftBar && (
                            <div className="min-h-[300px] w-[140px] rounded-sm bg-gray-100 px-4 py-5">
                              <p className="text-sm">{item.leftBar}</p>
                            </div>
                          )}
                          <div className="w-full">
                            <ul className="grid grid-cols-2 gap-2 p-4">
                              {item.subnavigation.map((subitem) => (
                                <li key={subitem.title}>
                                  <a href={subitem.href}>{subitem.title}</a>
                                </li>
                              ))}
                            </ul>
                            {item.bottomBar && (
                              <div className="mt-4 rounded-md bg-gray-100 p-4">
                                <p className="text-sm uppercase">
                                  {item.bottomBar.title}
                                </p>
                                <ul className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
                                  {item.bottomBar.links.map((link) => (
                                    <li key={link.title}>
                                      <a href={link.href}>{link.title}</a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <p className="mb-3 text-2xl italic md:hidden">
          ⚠️This example is only made for desktop.
        </p>

        <p className="max-w-[20ch] text-3xl font-bold leading-[1.1] md:text-[100px]">
          Don't use this in production yet, unless you know about it's
          shortcomings. See video.
        </p>

        <p className="mt-2">
          Of course this mega menu is inspired by Stripe's amazing work ;)
        </p>
      </main>
    </div>
  );
}

export default App;
