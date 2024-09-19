import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TeamMemberView({ data }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vue par membre de l'équipe</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom et Prénom</TableHead>
              <TableHead>Type de Tâche</TableHead>
              <TableHead>Canal/édition</TableHead>
              <TableHead>Date Début</TableHead>
              <TableHead>Date Fin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.teamMembers.map((member, index) => (
              <TableRow key={index}>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.taskType}</TableCell>
                <TableCell>{member.channel}</TableCell>
                <TableCell>{member.startDate}</TableCell>
                <TableCell>{member.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}