"use client"

import React from "react";
import {SessionProvider as Provider} from "next-auth/react"
import {Session} from "next-auth"

type Props = {
    children: React.ReactNode;
    session: Session | null;
}

export function SessionProvider({children}: Props) {
    return (
        <Provider>
            {children}
        </Provider>
    )
}