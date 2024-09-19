"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { parseExcel, processData } from './utils'
import TeamMemberView from './TeamMemberView'
import ChannelProgressView from './ChannelProgressView'
import DashboardView from './DashboardView'

export default function TeamManagement() {
  const [data, setData] = useState(null)

  const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
      const excelData = await parseExcel(file)
      const processedData = processData(excelData)
      setData(processedData)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Gestion d'équipe</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        </CardContent>
      </Card>

      {data && (
        <Tabs defaultValue="dashboard">
          <TabsList>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="team">Équipe</TabsTrigger>
            <TabsTrigger value="channels">Canaux</TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            <DashboardView data={data} />
          </TabsContent>
          <TabsContent value="team">
            <TeamMemberView data={data} />
          </TabsContent>
          <TabsContent value="channels">
            <ChannelProgressView data={data} />
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}