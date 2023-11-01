"use client";

import dynamic from "next/dynamic";
import useSWR from "swr";

import fetcher from "@hooks/fetcher";

type Props = {};

const Chart = dynamic(() => import("@components/Chart"));

function Page({params}: { params: { id: any } }) {
    const {data} = useSWR('http://10.50.227.158:3000/product/' + params.id, fetcher)

    return (
        <div style={{
            width: '100%',
            paddingTop: '50px',

        }}>
            <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
                  <span
                      style={{fontSize: "30px", fontWeight: "700", color: '#171717'}}
                  >
                {data ? data.name : 'loading'}
            </span>
                <span
                    style={{fontSize: "17px", fontWeight: "500", color: '#6B7280'}}
                >
                {data ? data.category : 'loading'}
            </span>
            </div>

            <div style={{
                display: 'flex',
                backgroundColor: '#E2E8F0',
                borderRadius: '5px',
                maxWidth: '100%',

                alignItems: 'center',
                justifyContent: 'space-between',
                margin: "0 20px 0 20px",
                padding: "20px"

            }}>
                <span style={{
                    color: '#1E293B',
                    fontSize: '15px',
                    fontWeight: '600'
                }}>
                    평균 시세</span>
                <span style={{
                    color: '#6B7280',
                    fontSize: '15px',
                    fontWeight: '600'
                }}>
                    {data ? data.priceStat.averagePrice : 0}원</span>
            </div>
      
        </div>
    );
}

export default Page;
