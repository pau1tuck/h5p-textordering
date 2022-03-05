import React from "react";

export function Container({ listItems }: any) {
  return (
    <div>
      {listItems.map((x: any, y: number) => {
        return x.text;
      })}
    </div>
  );
}
