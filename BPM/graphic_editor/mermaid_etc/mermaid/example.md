### mermaid example

 ```mermaid
 sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
 ```
 ```
 sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
 ```

Sample Diagrams 
[sequence](https://mermaid.live/edit#pako:eNptkE1vhCAQhv8KO9eqUaOCHLZp2kO3SU-9NV6IjB-JwpaFtNb434tabzunGXiegbwz1FoicLjhl0NV40svWiPGShFfT0NfY3g-P7zpTnHyisOgydoHpNPfRBgkk3aPd-Edq4VaEdKhMGTEf3S9Cz0abo5f3O92QC6bsdFeO93HL6RBHEhrUNgTBNCaXgK3xmEAI5pRrCPMq1yB7XDECrhvJTbCDbaCSi1euwr1qfV4mEa7tgPeiOHmJ3eVwh5pHIhwVn9Mqj5mlL3V5n1PcAvSr0El0TxrpyzwItmeAT7DD_AkKSNKkzJLUpZnZRoXAUz-OE4jVlLKioKyrCgZWwL43X4WR4zmsa-0iCmN03z5A8kZhVM)

---
### best
#### EPC
mermaid diagram (copy)   
``` mermaid
flowchart TB
    subgraph workflow [Workflow]
        direction TB
        Event1{{Событие1}} --> Function1[Операция1] --> Event2{{Событие2}}
    end
    
    subgraph docflow [Docflow]
        direction TB
        Document1[/Документ1/]
        Document2[/Документ2/]
    end
    
    docflow ~~~ Function1
    
    Document1 -.->|входящий| Function1
    Function1 -.->|исходящий| Document2

    class Event1,Event2 event;
    class Document1,Document2 document;
    class Function1 function;
    
    classDef event fill:#ffcccc,stroke:#d6b656,stroke-width:2px;
    classDef function fill:#e1f5e1,stroke:#4caf50,stroke-width:2px,rx:8,ry:8;
    classDef document fill:#cccccc,stroke:#555,stroke-width:2px;
```
code:
```
flowchart TB
    subgraph workflow [Workflow]
        direction TB
        Event1{{Событие1}} --> Function1[Операция1] --> Event2{{Событие2}}
    end
    
    subgraph docflow [Docflow]
        direction TB
        Document1[/Документ1/]
        Document2[/Документ2/]
    end
    
    docflow ~~~ Function1
    
    Document1 -.->|входящий| Function1
    Function1 -.->|исходящий| Document2

    class Event1,Event2 event;
    class Document1,Document2 document;
    class Function1 function;
    
    classDef event fill:#ffcccc,stroke:#d6b656,stroke-width:2px;
    classDef function fill:#e1f5e1,stroke:#4caf50,stroke-width:2px,rx:8,ry:8;
    classDef document fill:#cccccc,stroke:#555,stroke-width:2px;
```
- min [online mermaid.live](https://mermaid.live/edit#pako:eNqFU8tu00AU_ZXRdOukftuZSF1AYMcOCYk4C9ceJ1ZtTzQZk5TUERSBhFh0w7pS_wAQkQLi8Qszf8T4ETd1FtyN7_Wcc-6581jDgIQYIghAlJBlMPMpA88feRmQscjPp9Sfz8CS0ItyGYxfNNmkRpQRxhQHLCZZyyvjySucMW295nf8D_8qPolrvuNbrShAr3cGnuZZRdHG_Jb_5Vvxhn8RH_hO3GiTClDR9S5dL4q6A87COukYDUlQ-xzVyX9tSlyelk7Hp_yzbPVTvOO_-Jb_Ftfa6eQYpx_j9D2uY2rvZbPZ3M97CGh7g16_d3bFv4n3Uvm7uBEf5bA_rrqstmzwO_G2y2htelnNCRJ_sWgOQ6k3FeDyMzxcb50orUBpv8oeAO8tRE02PJyoAo1wVLcAUZwk6CSKAhnKglFygdFJaJ_blt2UvWUcshnS56thR2Gv34hgLbKw1oqYgR9Z6pGIQlfIVeglcrty-2kauSB44MmyrGNDUIFTGocQMZpjBaaYpn5ZwnWp7UE2wyn2IJJpiCM_T5gHvayQtLmfvSQk3TMpyacziCI_Wcgqn4c-w6PYlzc2bf9SeXkwfUzyjEGkOYNKBKI1XEGkG3bfNnTXdAaqaTiqbSrwUqIMtz9wXMc2VUN19IFVKPB11Vbt26Zhu6btWrqh6palKRCHMSP0Wf3Yqzdf_APIGXD7)
- max [online mermaid.live](https://mermaid.live/edit#pako:eNqFVN1u0zAYfRXLkxBISVdnSdplaBcwuOOGTUKi7UWWOGu0_FROwjbaTFsnkCYmesMFV0jwBGUwMfbTvYL9RthJmmzt0HyRfI7Pd77j48_pQyu0MTQgAI4X7lhdk8Rg41k7AHxEyeYWMXtdsBOSbbEMWm-KqJMjxLBdgq3YDYMyT4wX73AQo36ffqcT-pN9YkN6Ts8QeLpJVkEU8zJpCmR5FbxMgiwbteg3ekPP2AEds4_0nI1QJwNkTMosk5IzOW7gRt00zQvjwM6DGf12aOXy1_LgQfUcl_hiA61F-oWXvWBH9Iqe0Ws2RIudeZwyj1OmuBlRlSoSehi0XovnI7ARht6DsgQWPW7Rr-yQWzWhl_SaGzXkBS_ZCeo8qZDre1GMfdTiWPpD5vBzdpgBr-gYdapCRVBqnDq1v79fnUy-VDaBWBPab--qNAzINXl1QE_ZB67vNxuxY35afwVvfmD0Dx3TX3TCxUzoKb2g48FsoXJacAnp_2O74e0iVo649cNBdR73MYGMamocG_FeG3Lq0SD39f4UdgiyjCsu-ZidsM-AK7gWZrKD6rDFLgrLcxrLM6OouARS3sEAi9fK7fXSNakULvaWRXeAlSqniFZuu5-B1rCTl-CXwvOMBcex-JCimITb2Fiw9U1d04upvOPacddQersrMwxT_oIEI0fDqCRRLdPR6nMkEtk1mhLZM5qzdNPdFHSWdUeTpmnzgqAEt4hrQyMmCZagj4lviinsC-42jLvYx21o8NDGjpl4cRu2g5Sn9czgbRj600wSJltdaDimF_FZ0rPNGK-5Jr98fvmV8M7H5HmYBDE0UF3VMxZo9OEuNGTUrC0v641mA6nKkqJpdUWCexynaLUGUviHJX1JadZVJZXg-6xyvdZE9YbeQEhFuqKqGpIgtt04JK_y_2z2u03_ARckGcA)
  
#### 072
- [072v1](https://mermaid.live/edit#pako:eNrtXVtv2zYU_iuEnhzAFmz5IkUbCqRxhmVrtjYuMGDzQGgW4wizJU-W13RFgbbbnvrQbthTB6SXDXs00mIZ0rVN_wL9j3aoi-925HaGJZkvCSmfjybPRx6eQ_Ekt4SapRNBFeq21jpEV_Y_qJr0GX3bu0Mf0eMSymQuIfqQ_kKfYvoX_ZM-S3k15NU-_Ma-RI97d-kbek5fwM-T3gMUSDynJ_DkX3qSRrUDZ2OyLZU-7N3p_ZwX86lUv7gxV1BtWwfODc0mqVRQmgboy9PHMJIz6MQr6MzfbjdPMX1Mj1VfMgMot5vsKQj17vV-oucAet27j6W97S1cvryr0if0TEp9Na015LaGxlpDk60h1hqC1pjSJHFTzLMCaCaNlFz26w1UNbf39zA08zvKiKhtdewaQeL40Hyp7kVSI1Um6mh2nTie6CPo0imM4Aw6eN9tLGG0P6WnMJYX7Cd2h3UGdJzTf2DUb6D8UsVbLa12SPB1q1nTnD7BQzg0FYc8HPJwTBGbYlZUiqzkfQR0Fjid_zOd_gBPMIzxLn0L_XwFvXJJ6T1Q8ee2VmsQ_En5UzygMsCgqRjkYRBgEFNATgYeczlW9D7hPC5jWQIVvXswyNdDtjiN6TF9Chb5CRu9W8HDK3FodY7BXeObRi4ceXC3gobhLrtZUWK_baJnWFe5zb2Y3EPN1j1yg9J8co-hG7DX9X6EQbIunrgm8zSNodMDLvHWdx3NNjptvK2UBqt1FhiNgFEARgB2l-313EeoIikfu_bX_3BtyZUG5EpzyZUWXLkSrKc_4PlvKr5qtZ26Tdr4qm3hHdMhdss22mRojXqCKBBEIIgGgu5qLIol0TW1LV-oZVuctWWwxu1tbMhdzN5Ks0zmiLmlJwsaXDSGnm5xy4oSA4MbdCYFBcQKrM9BeYTEbZtojmFtjMDm7ZmTMrPXZiAbJij1OxIi4PQl2ZAU8Fw33bF5z6Z7rsPaG1N0XPR2URggfrZzPbT_z4QD7ZVYYc-o2ZZvrJKpv19h9M8zo-7YLtuZTeJA4cCym6w7Jq4Q-3ujRtppvLtb6Wt0ChwFcDQER304Ari_HWTXQ8Xzd9z--PEXhqlbN9qupomNpawkhdx2-20gvw3ktYFYG0wNFUczddhBYqzwmVvhpMLD7oJl0miA83qD2Dt6nSy8DTI46sPZ4Pflkjun2SdR0e4Ub2NSJvx0HnL7BzO3cu3KjFnrO_6DCQqi45NzEAigHd1g1iKS03QJily5XShrjlYjTP_jKs_FR-WhLYO0WstwpL-_bcgPBtYN9Nsd0m_3Qv12Q1je7gJbXXd1Xmz3Ir3NkpofKURcx6vxeNdT15H1jtd06sfDk04QOfP31m7Uve5YMDHLy-ku4Fh2I-Shr6vSY-LNJ4ie0NYpqp7_UrmYIpQafdZnaPgxfdO7T18iYOkcBgkjoy-9uy_jDO40mtrGrG-a-3Z5nvicF1qTsDCRx86VvS18-eoernQMh0x7Pzk7FmFYBFjkYsdeWRZESQQ_rehe9GGSg4U28Z5i-JXGVO4mHy4WEq4V2WFCILxt2QTvd0zHaJKF4iHEkMhHXhQccaaXynQUAzBO-XIXd-SDPD4BQk6A2dcX5k2AiAWS68r2tGsq88TfabmvMljlxC6Z2OgHxHwKhJwC72LJIxh0r4Bvnim1XplSeZ4plaRMqTzPlEpEplSeZ0ol9-Z-nmdKJTdTKs8zpWKYKZXnmVLc3vJMqThmSsn8jukCb-hjo7eI3huNjf7iexc0PlM0Ifc7V6vwpN_ZXJZ21-4e5rgi-Vn1mp1Vy_ysOkln1TI_q07EWbXMz6qTe3Yi87Pq5J5Vy_ysOoZn1TI_q-b2lp9Vx_GsejmX6sb_SoVuaGxuxyDZqWzUDUdr4GsiS2K5rJnfGmY9RFTr49AIjunrSDxiv3wNJOnmZNRJ5klOa0Q2z3NayyXOU50SNAd4tlO8CecJT5xbnvPEZwFPe1qUciEt1G1DF1TH7pC00CTgbrKqcKtqIlQVnEPSJFVBhaJODrROw6kKVfM2wFqa-aVlNQOkbXXqh4J6oDXaUOu0dM0hZUOr21pfROs4VuWmWQvqBEyeZe95_7LK_c9V0AwxdWJvWxDdCGph0_0aQb0lHEEtKyolJS9LUlHOKoqSTws3BTWTK8glUSlIuU05m98sybnS7bTwg9uzgljIZnPFklKUsopclHK3_wO72tq_)
- 
