import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ChannelProgressView({ data }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Progression des canaux</CardTitle>
      </CardHeader>
      <CardContent>
        {data.channels.map((channel, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{channel.name}</h3>
            <Progress value={channel.progress} className="mt-2" />
            <p className="text-sm text-gray-500 mt-1">{channel.progress}% complété</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}