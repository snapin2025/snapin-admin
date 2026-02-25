"use client"
import {ComponentPropsWithoutRef, ComponentRef, ElementType, Ref} from 'react'

import clsx from 'clsx'

import s from './Table.module.css'

export type PropsWithRef<T extends ElementType> =
    ComponentPropsWithoutRef<T> & {
    ref?: Ref<ComponentRef<T>>
}

const Root = (props: PropsWithRef<'table'>) => {
    const {className, ref, ...rest} = props

    return <table className={clsx(className, s.root)} {...rest} ref={ref}></table>
}

const TableBody =
    (props: PropsWithRef<'tbody'>) => {
        const {className, ref, ...rest} = props

        return <tbody className={clsx(className)} {...rest} ref={ref}/>
    }


const TableHeader =
    (props: PropsWithRef<'thead'>) => {
        const {className, ref, ...rest} = props

        return <thead className={clsx(className)} {...rest} ref={ref}></thead>
    }


const TableRow = (props: PropsWithRef<'tr'>) => {
    const {className, ref, ...rest} = props

    return <tr className={clsx(className, s.row)} {...rest} ref={ref}/>
}

const TableCellHead = (props: PropsWithRef<'th'>) => {
    const {className, ref, ...rest} = props

    return (
        <th className={clsx(className, s.cellHead)} {...rest} ref={ref}/>

    )
}


const TableCell = (props: PropsWithRef<'td'>) => {
    const {className, ref, ...rest} = props

    return (
        <td className={clsx(className, s.cellRow)} {...rest} ref={ref}/>
    )
}

export const Table = {Root, TableBody, TableCell, TableCellHead, TableHeader, TableRow}