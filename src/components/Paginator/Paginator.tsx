// components/Paginator/Paginator.tsx

import React, { FC } from "react";
import "./Paginator.style.scss";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import Icon from "../Icon";

export interface PaginatorProps {
  itemCount: number;
  perPage: number;
  currentPage: number;
  showFirstLast?: boolean;
  showNextPrevious?: boolean;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  // onPerPageChange?: () => void;
}

const defaultProps: PaginatorProps = {
  itemCount: 0,
  perPage: 50,
  currentPage: 1,
  showFirstLast: true,
  showNextPrevious: true,
  onPageChange: (e) => e,
};

const Paginator: FC<PaginatorProps> = (props: PaginatorProps) => {
  props = { ...defaultProps, ...props };

  const totalPageCount = (): number => {
    return Math.ceil(props.itemCount / props.perPage);
  };

  const currentFlag = (p): boolean => {
    return props.currentPage === p;
  };

  const firstFlag = (): boolean => {
    return props.currentPage === 1;
  };

  const lastFlag = (): boolean => {
    return props.currentPage === totalPageCount();
  };

  const breadcrumbArray = (): number[] => {
    const start = 1;
    const end = 6;

    return [start, 2, 3, 4, end];
  };

  if (totalPageCount() >= 1) {
    return (
      <div className={"paginator"} data-testid={"Paginator"}>
        <ButtonGroup>
          {/* FIRST BUTTON */}
          {props.showFirstLast && (
            <Button
              theme={"white"}
              size={"sm"}
              width={"square"}
              disabled={firstFlag()}
              onClick={() => props.onPageChange(1)}
            >
              <Icon icon={"chevrons-left"} />
            </Button>
          )}

          {/* PREVIOUS BUTTON */}
          {props.showNextPrevious && (
            <Button
              theme={"white"}
              size={"sm"}
              width={"square"}
              disabled={firstFlag()}
              onClick={() => props.onPageChange(props.currentPage - 1)}
            >
              <Icon icon={"chevron-left"} />
            </Button>
          )}

          {breadcrumbArray().map((p, index) => {
            return (
              <Button
                key={index}
                theme={`${currentFlag(p) ? "primary" : "white"}`}
                size={"sm"}
                width={"square"}
                onClick={() => props.onPageChange(p)}
              >
                {p}
              </Button>
            );
          })}

          {/* NEXT BUTTON */}
          {props.showNextPrevious && (
            <Button
              theme={"white"}
              size={"sm"}
              width={"square"}
              disabled={lastFlag()}
              onClick={() => props.onPageChange(props.currentPage + 1)}
            >
              <Icon icon={"chevron-right"} />
            </Button>
          )}

          {/* LAST BUTTON */}
          {props.showFirstLast && (
            <Button
              theme={"white"}
              size={"sm"}
              width={"square"}
              disabled={lastFlag()}
              onClick={() => props.onPageChange(totalPageCount())}
            >
              <Icon icon={"chevrons-right"} />
            </Button>
          )}
        </ButtonGroup>
      </div>
    );
  } else {
    return <p>foo</p>;
  }
};

export default Paginator;
